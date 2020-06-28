import React, { Component } from "react";
import Login from "../Modals/Login";
import SignUp from "../Modals/Signup";
import { connect } from "react-redux"
import {Link} from 'react-router-dom'
import { getSignupInputs } from "../../Actions/userActions"
import '../../App.css';
// import Footer from "./Roominformation/Footer"

class Landing2 extends Component {
  state = {
    show: false,
    show2: false
  };
  showLogin = e => {
    this.setState({
      show: !this.state.show
    });
  };
  showSignUp = e => {
    this.setState({
      show2: !this.state.show2
    });
  };


  getUserInput = (e) => {
    this.props.getSignupInputs({[e.target.name]: e.target.value})
  }

  handleSignup = async (e) => {
    e.preventDefault()
    // const body =  this.props.signUpFormDetails
    // console.log(body)
    try {
      const api = await fetch("http://localhost:3001/signUp", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(this.props.signUpFormDetails)
      })
      console.log(api)
    } catch (error) {
      console.error(error)
    }
  }
  render() {
    console.log(this.props.signUpFormDetails)
    return (
        <div className="LandingWrapper">
          <div className="header">
            <div className="logoWrapper">
              <h2 className="logo">LOGO</h2>
            </div>

          <div className="loginSignupWrapper" >
            <Link id="login" onClick={e => {
              this.showLogin(e)
            }}>Login</Link>

            <Link id="signup"  onClick={e => {
              this.showSignUp(e)
            }}>Sign up</Link>


              <Login onClose={this.showLogin} show={this.state.show} />            
              <SignUp onClose={this.showSignUp} show2={this.state.show2} />
            </div>
          </div>


          <div className="landingBody">
            <div className="landingSearch">
              <input type="text" placeholder="Conference room" id="search"></input>
            </div>
          </div>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { userReducer } = state
  return {
    signUpFormDetails: userReducer.signUpFormDetails
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getSignupInputs: (values) => dispatch(getSignupInputs(values))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Landing2);
