import React, { Component } from "react";
import { connect } from "react-redux"
import { showSignup, showSignIn, showAdminSignup} from "../../Actions/userActions"
import { getSignupInputs} from "../../Actions/userActions"
import { updateStateWithSearch} from "../../Actions/roomActions"
import '../../App.css';
import LandingPageHeader from "../Header/LandingPageHeader";
import { Link } from "react-router-dom";
import AdminLogin from "../Modals/AdminLogin";
import { updateStateWithSearchInput, updateStateWithFilteredRoom } from  "../../Actions/roomActions"


class Landing extends Component {

  filterRoom = () => {
    // fetch("http://localhost:3001/searchRoom", {
    fetch("https://bookandmeet.herokuapp.com/searchRoom", {
      method: "POST", 
      headers: {"Content-type": "application/json"},
      body: JSON.stringify(this.props.signUpFormDetails)
    })
    .then(response => response.json())
    .then(jsonResponse => {
      if(jsonResponse.status === "success"){
        this.props.updateStateWithSearch(jsonResponse.data.data)
        this.props.history.push("/home")
      }

    })
    .catch(err => console.log(err))
  }

  showLogin = e => {
    this.setState({
      show: !this.state.show
    });
    this.props.showLogin(false)
  };
  getUsersInput = (e) => {
    this.props.getSearchInputs({[e.target.name]: e.target.value})
   
  };
  getSearchInput = (e) => {
    this.props.updateStateWithSearchInput({[e.target.name]: e.target.value})
}
searchForRooms = (e) => {
  e.preventDefault()                
  const { roomType, roomCapacity } = this.props
  let minimum = 0, maximum = 0
  switch(roomCapacity) {
      case "oneToTen":
          minimum = 1
          maximum = 10
          break;
      case "elevenToFifty":
          minimum = 11
          maximum = 50
          break;
      case "fiftyOneToOneHundred":
          minimum = 51
          maximum = 100
          break;
      case "hundredToTwoHundred":
          minimum = 101
          maximum = 200
          break;
      case "aboveTwoHundred":
          minimum = 201
          maximum = 5000
          break;
      default: 
          minimum = 0;
          maximum = 0;
    this.props.getSignupInputs({[e.target.name]: e.target.value})
  }

  const filteredRoom = this.props.rooms.filter(room => {
    if(room.type === roomType && (room.capacity >= minimum && room.capacity <= maximum) ){
        return true
    }
    return false
})
this.props.updateStateWithFilteredRoom(filteredRoom)
}

  handleSignIn = () => this.props.showSignin(true)
  openSignUpModal = () => this.props.showSignup(true)
  signInNew = () => this.props.signInModal(true)
  adminLogin = () => this.props.showAdminLogin(true)
 
  render() {
    return (        
        <div className="landingWrapper">
          <div className="backgroundImage"></div>
          <LandingPageHeader />
          <div className="landingBody">
             
              <h3>Search and book a meeting room</h3>
              <input type="text" placeholder="Conference room" id="search" onChange={this.getUsersInput}></input><br/>
              <div className="flexDisplay">
                <select defaultValue={"Type"} name="type" className="filterSelect" onChange={this.getUsersInput}>
                    <option disabled hidden>Type</option>
                    <option value="Board Room">Board Room</option>
                    <option value="Private Room">Private Room</option>
                    <option value="Conference Room">Conference</option>
                    <option value="Auditorium">Auditorium</option>
                </select>
                
                <select name="capacity" defaultValue={"Capacity"} className="filterSelect" onChange={this.getUsersInput}>
                    <option disabled hidden>Capacity</option>
                    <option value="maxTen">Below 10 seats</option>
                    <option value="maxFifty">Below 50 seats</option>
                    <option value="maxOneHundred">Below 100 seats</option>
                    <option value="maxTwoHundred">Below 200 seats</option>
                    <option value="aboveTwoHundred">Below 1000 seats</option>
                </select>

                <input type="datetime-local" className="filterDateTime" id="datePicker" onChange={this.getSearchInput}/>
                {/* <input type="time" className="filterSelect" id="timePicker"/> */}
                <button onClick={this.searchForRooms} className="filterButton">Search</button>
                <input type="date" name="searchDate" className="filterDateTime" id="datePicker" onChange={this.getUsersInput}/>
                <input type="time" name="searchTime" className="filterDateTime" id="datePicker" onChange={this.getUsersInput}/>
                <button className="filterButton" onClick={this.filterRoom}>Search</button>
              </div>
            
          </div>
            <div className="landingFooter"> 
              <Link to="aboutUs"><span>About us</span></Link>
              <Link to="#" onClick = {this.adminLogin}><span>Admin</span></Link>
              <Link to="feedbackForm"><span>Feedback</span></Link>
            </div>
            <AdminLogin/>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { userReducer } = state
  const { roomReducer } = state
    console.log("Rooms", roomReducer.rooms)
    console.log("Filtered ROoms", roomReducer.filteredRoom)

  return {  
   searchInput: userReducer.searchInput, 
    signUpFormDetails: userReducer.signUpFormDetails,
    showSignUp: userReducer.showSignUp,
    showSignIn: userReducer.showSignIn,
    showadminsignup: userReducer.showAdminLogin,
    rooms: roomReducer.rooms,
    roomType: roomReducer.searchInput.roomType,
    roomCapacity: roomReducer.searchInput.capacity,
    dateSearch: roomReducer.searchInput.dateSearch,
    timeSearch: roomReducer.searchInput.timeSearch,  
    filteredRoom: roomReducer.filteredRoom,
    searchedRooms: roomReducer.searchedRooms,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
   
    showSignin: (values) => dispatch(showSignIn(values)),
    showSignup: (values) => dispatch(showSignup(values)),
    showAdminLogin: (values) => dispatch(showAdminSignup(values)), 
    updateStateWithSearchInput: (values) => dispatch(updateStateWithSearchInput(values)),
    updateStateWithFilteredRoom: (values) => dispatch(updateStateWithFilteredRoom(values)) , 
    showAdminLogin: (values) => dispatch(showAdminSignup(values)),   
    getSignupInputs: (values) => dispatch(getSignupInputs(values)),   
    updateStateWithSearch: (values) => dispatch(updateStateWithSearch(values)),   
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Landing);
