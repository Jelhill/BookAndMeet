import React, { Component } from "react";
import Login from "../Modals/login";
import SignUp from "../Modals/signup";
import { connect } from "react-redux"
import { getSignupInputs } from "../../Actions/userActions"
import '../../App.css';

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
                      <input type="text" name="surname" className="form-control inputsignup" placeholder="Surname" onChange={this.getUserInput} />
                      <input type="text" name="firstname" className="form-control inputsignup" placeholder="Firstname" onChange={this.getUserInput}/>
                      <input type="text" name="othername" className="form-control inputsignup" placeholder="OtherName" onChange={this.getUserInput}/>
                      <input type="email" name="email" className="form-control inputsignup" placeholder="email" onChange={this.getUserInput}/>
                      <input type="text" name="phoneNumber" className="form-control inputsignup" placeholder="phoneNumber" onChange={this.getUserInput}/>
                      <input type="text" name="username" className="form-control inputsignup" placeholder="username" onChange={this.getUserInput}/>
                      <input type="password" name="password" className="form-control inputsignup" placeholder="password" onChange={this.getUserInput}/>
                      <input type="password" name="confirmPassword" className="form-control inputsignup" placeholder="password" onChange={this.getUserInput}/>
                   
                      <div>
                      <input type="radio" name="gender" value="male" className="" placeholder="gender" onChange={this.getUserInput}/>
                      <label>Male</label>
                      <input type="radio" name="gender" value="male" className=""  placeholder="gender" onChange={this.getUserInput}/>
                      <label>Female</label>
                      </div>
                      <input type="file" name="imageUrl" className="form-control inputsignup" placeholder="Image" onChange={this.getUserInput} />
                      <input type="submit" value="Create Account" className="form-control signupsubmit" onClick={this.handleSignup} />
                      
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
