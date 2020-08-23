import React, { Component } from "react";
import { connect } from "react-redux"
import { showSignup, showSignIn, showAdminSignup} from "../../Actions/userActions"
import '../../App.css';
import LandingPageHeader from "../Header/LandingPageHeader";
import { Link } from "react-router-dom";
import AdminLogin from "../Modals/AdminLogin";


class Landing extends Component {
  // state = {
  //   show: false,
  //   show2: false
  // };

  showLogin = e => {
    this.setState({
      show: !this.state.show
    });
    this.props.showLogin(false)
  };
  getUsersInput = (e) => {
    this.props.getSearchInputs({[e.target.name]: e.target.value})
   
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
                <select defaultValue={"Type"} name="" className="filterSelect" >
                    <option value="type" disabled>Type</option>
                    <option value="boardRoom">Board Room</option>
                    <option value="privateRoom">Private Room</option>
                    <option value="conferenceRoom">Conference</option>
                    <option value="auditorium">Auditorium</option>
                </select>
                
                <select name="" defaultValue={"Capacity"} className="filterSelect">
                    <option disabled hidden>Capacity</option>
                    <option value="oneToTen">1 - 10 seats</option>
                    <option value="elevenToTwenty">11 - 50 seats</option>
                    <option value="fiftyOneToOneHundred">51 - 100 seats</option>
                    <option value="hundredToTwoHundred">101 - 200 seats</option>
                    <option value="aboveTwoHundred">Above 200 seats</option>
                </select>

                <input type="datetime-local" className="filterDateTime" id="datePicker"/>
                {/* <input type="time" className="filterSelect" id="timePicker"/> */}
                <button className="filterButton">Search</button>
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
  return {  
   searchInput: userReducer.searchInput, 
    signUpFormDetails: userReducer.signUpFormDetails,
    showSignUp: userReducer.showSignUp,
    showSignIn: userReducer.showSignIn,
    showadminsignup: userReducer.showAdminLogin
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
   
    showSignin: (values) => dispatch(showSignIn(values)),
    showSignup: (values) => dispatch(showSignup(values)),
    showAdminLogin: (values) => dispatch(showAdminSignup(values)),   
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Landing);
