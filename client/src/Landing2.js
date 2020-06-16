import React, { Component } from "react";
import Login from "./Components/Modals/login";
import SignUp from "./Components/Modals/signup";
import './App.css';




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

  render() {
    return (
        <div className="LandingWrapper">
          <div className="header">
            <div className="logoWrapper">
              <h2 className="logo">LOGO</h2>
            </div>

            <div className="loginSignupWrapper" >
              <button type="button" className="btn btn-primary" id="login" onClick={e => {
                this.showLogin(e)
              }}>Login</button>
              <Login onClose={this.showLogin} show={this.state.show}>
                <div className="LoginContent">
                  <form>
                    <div className="form-group">
                      <input type="text" className="form-control inputusername" placeholder="Username or email" />
                      <input type="password" className="form-control inputpassword" placeholder="password" />
                      <p className="loginparagraph"><a href="#" style={{ color: '#665687' }}>forget password ?</a></p>
                      <input type="submit" value="Login" className="form-control inputsubmit" />
                    </div>
                  </form>
                  <p className="loginparagraph">Don't have an account ? <a href="#">Sign up</a></p>
                  <p className="otherlogin"> Login with <a href="#">Google</a></p>
                  <p className="otherlogin">Login with <a href="#">Facebook</a></p>
                </div>
              </Login>


              <button type="button" id="signup" className="btn btn-primary" onClick={e => {
                this.showSignUp(e)
              }}>Sign up</button>
              <SignUp onClose={this.showSignUp} show2={this.state.show2}>
                <div className="signupContent">
                  <form>
                    <div className="form-group">
                      <input type="text" className="form-control inputsignup" placeholder="First Name" />
                      <input type="text" className="form-control inputsignup" placeholder="Last Name" />
                      <input type="text" className="form-control inputsignup" placeholder="Other Name" />
                      <input type="email" className="form-control inputsignup" placeholder="email" />
                      <input type="password" className="form-control inputsignup" placeholder="password" />
                      <input type="submit" value="Create Account" className="form-control signupsubmit " />
                    </div>
                  </form>
                  <p className="loginparagraph">Already have an account ? <a href="#">Login</a></p>
                  <p className="otherlogin">Sign up with <a href="#">Facebook</a></p>
                  <p className="otherlogin">Sign up with <a href="#">Google</a></p>
                </div>
              </SignUp>
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

export default Landing2;
