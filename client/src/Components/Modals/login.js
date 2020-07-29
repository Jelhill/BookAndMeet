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

    setWithExpiry = (key, value, ttl) => {
      const now = new Date()
      const item = {
        value: value,
        expiry: now.getTime() + ttl
      }
      localStorage.setItem(key, JSON.stringify(item), 60000)
    }

    
    handleLogin = async (e) => {
      e.preventDefault()
      console.log(this.props.signUpFormDetails)
      fetch("http://localhost:3001/login", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(this.props.signUpFormDetails)
      })
      .then(response => response.json())
      .then((jsonResponse) => {
        console.log(jsonResponse)
        if(jsonResponse.message === "success" && jsonResponse.token !== null){
          this.setWithExpiry("token", jsonResponse.token, 60000)
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
                          <h3 className="modalTitle">Sign in</h3>
                      </div>
                  
                      <div className="modalContent">
                      <form>
                       <div className="formDiv">
                         <input 
                            type="email" 
                            name="email" 
                            className="input" 
                            placeholder="Email" 
                            onChange={this.getUserInput}
                          />
                         <input
                            type="password" 
                            name="password" 
                            className="input" 
                            placeholder="Password" 
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
                           <span><Link to="#" className="forgetPassword">forget password ?</Link></span>
                         <button 
                            onClick={this.handleLogin}
                            className="form-control signupsubmit">
                            Login
                          </button>
                       </div>
                       </form>
                       <p className="loginparagraph">Not yet registered <Link to="#"><span>Sign up</span></Link></p>

                      </div>
                      </div>
                  </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    const { userReducer } = state
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
  