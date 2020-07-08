import React, {Component} from 'react';
import { Link, withRouter } from "react-router-dom"
import { connect } from 'react-redux';
import { showSignIn, getSignupInputs } from "../../Actions/userActions"


class Login extends Component{

    onClose = (e) => {
        e.preventDefault()
        this.props.showSignin(false) 
    }

    getUserInput = (e) => {
      this.props.getSignupInputs({[e.target.name]: e.target.value})
    }

    handleLogin = async (e) => {
      e.preventDefault()
      fetch("http://localhost:3001/login", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(this.props.signUpFormDetails)
      })
      .then(response => response.json())
      .then((jsonResponse) => {
        console.log(jsonResponse)
        if(jsonResponse.message === "success" && jsonResponse.token !== null){
          window.localStorage.setItem("token", jsonResponse.token)
          this.props.history.push("/home")
        }       
      })
      .catch((err) => console.log(err))
    }

    render(){
        if(!this.props.showSignIn){
            return null;
        }
        return(          
            <div className="modalDiv">
              <div className="signupmodal">
                  <div className="leftModal">
                      <h1 className="boardRoom">BoardRoom</h1>
                  </div>
                  <div className="rightModal">
                      <div className="signupheader">
                          <button className="closeWrapper"><span className="close" onClick={this.onClose} >&times;</span></button>
                          <h3 className="welcome">Sign in</h3>
                      </div>
                  
                      <div className="modalContent">
                      <form>
                       <div className="formDiv">
                         <input 
                            type="text" 
                            name="username" 
                            className="form-control input" 
                            placeholder="Username" 
                            onChange={this.getUserInput}
                          />
                         <input 
                            type="password" 
                            name="password" 
                            className="form-control input" 
                            placeholder="password" 
                            autoComplete="off" 
                            onChange={this.getUserInput}
                          />
                           <input 
                            type="checkbox" 
                            name="rememberme" 
                            className="checkbox">
                            </input>
                           <label 
                            htmlFor="rememberme">Remember me</label>
                           <span><Link className="forgetPassword">forget password ?</Link></span>
                         <button 
                            onClick={this.handleLogin}
                            className="form-control signupsubmit">
                            Login
                          </button>
                       </div>
                       </form>
                    <div className="loginWithDiv">
                        <label className=""> Login with</label>
                          <Link to=""><i className="fa fa-google"></i></Link>
                          <Link to=""><i className="fa fa-facebook"></i></Link>
                          <Link to=""><i className="fa fa-twitter"></i></Link>
                      </div>
                      <p className="loginparagraph">Don't have an account ? <Link to="#">Sign up</Link></p>

                    {/* <p className="otherlogin">Sign up with <a href="#">Facebook</a></p>
                    <p className="otherlogin">Sign up with <a href="#">Google</a></p> */}
                  </div>
                      </div>
                  </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    const { userReducer } = state
    console.log(userReducer.signUpFormDetails)
    return {
      showSignIn: userReducer.showSignIn,
      signUpFormDetails: userReducer.signUpFormDetails,
    }
}
  
  const mapDispatchToProps = (dispatch) => {
    return {
      showSignin: (values) => dispatch(showSignIn(values)),
      getSignupInputs: (values) => dispatch(getSignupInputs(values)),
    }
  }
  
  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
  