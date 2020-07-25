import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import logo from "../../Images/meeting.png"
import Login from "../Modals/Login";
import SignUp from "../Modals/SignUp";
import { connect } from "react-redux"
import { showSignup, showSignIn} from "../../Actions/userActions"


class LandingPageHeader extends Component {
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
            <div className="header">
            <div className="logoWrapper">
              <img src={logo} alt="Logo"/>
              <h2 className="logo">boardroom</h2>
            </div>
            <input type="checkbox" id="check"/>
            <label htmlFor="check">
                <i className="fa fa-bars" id="checkBtn" />
            </label>
          <div className="loginSignupWrapper" >
            <Link id="login" to="" onClick={this.handleSignIn}>Login</Link>
            <Link id="signup" to="" onClick={this.openSignUpModal}>Sign up</Link>
            <Login />  
            <SignUp />
            </div>
          </div>
        )
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

  export default connect(mapStateToProps, mapDispatchToProps)(LandingPageHeader);
