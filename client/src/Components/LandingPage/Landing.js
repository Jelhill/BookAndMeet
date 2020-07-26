import React, { Component } from "react";
import { connect } from "react-redux"
import { showSignup, showSignIn} from "../../Actions/userActions"
import '../../App.css';
import LandingPageHeader from "../Header/LandingPageHeader";
import { Link } from "react-router-dom"

class Landing extends Component {
  state = {
    show: false,
    show2: false
  };

  showLogin = e => {
    this.setState({
      show: !this.state.show
    });
    this.props.showLogin(false)
  };
  

  handleSignIn = () => this.props.showSignin(true)
  openSignUpModal = () => this.props.showSignup(true)
  signInNew = () => this.props.signInModal(true)
 
  render() {
    return (        
        <div className="landingWrapper">
          <div className="backgroundImage"></div>
          <LandingPageHeader />
          <div className="landingBody">i
              <h3>Search and book a meeting room</h3>
              <input type="text" placeholder="Conference room" id="search"></input><br/>
              <div className="flexDisplay">
                <select defaultValue={"Type"} name="" className="filterSelect" >
                    <option value="type" disabled>Type</option>
                    <option value="boardRoom">Board Room</option>
                    <option value="privateRoom">Private Room</option>
                    <option value="conferenceRoom">Conference</option>
                    <option value="auditorium">Auditorium</option>
                </select>
                <input type="date" className="filterSelect" id="datePicker"/>
                <input type="time" className="filterSelect" id="timePicker"/>
                <select defaultValue={"Capacity"} name="" className="filterCapacity">
                    <option value="capacity" disabled>Capacity</option>
                    <option value="oneToTen">1 - 10 seats</option>
                    <option value="elevenToTwenty">11 - 50 seats</option>
                    <option value="fiftyOneToOneHundred">51 - 100 seats</option>
                    <option value="hundredToTwoHundred">101 - 200 seats</option>
                    <option value="aboveTwoHundred">Above 200 seats</option>
                </select>
                <button className="filterButton">Search</button>
              </div>
          </div>
            <div className="landingFooter"> 
              <Link to="aboutUs"><span>About us</span></Link>
              <Link to="admin"><span>Admin</span></Link>
              <Link to="feedback"><span>Feedback</span></Link>
            </div>
          
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { userReducer } = state
  return {  
    signUpFormDetails: userReducer.signUpFormDetails,
    showSignUp: userReducer.showSignUp,
    showSignIn: userReducer.showSignIn
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    showSignin: (values) => dispatch(showSignIn(values)),
    showSignup: (values) => dispatch(showSignup(values))    
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Landing);
