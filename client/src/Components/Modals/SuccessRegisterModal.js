import React, {Component} from 'react';
import { Link, withRouter } from "react-router-dom"
import { connect } from 'react-redux';
import { showSignup, saveInitialUserDetails, getSignupInputs } from "../../Actions/userActions"

class CompleteSignUp extends Component{

    onClose = (e) => {
      e.preventDefault()
      this.props.showSignup(false)
      window.location = "/"
    } 

    getUserInput = (e) => {
      this.props.getSignupInputs({[e.target.name]: e.target.value})
    }

    handleSignup = async (e) => {
      e.preventDefault()
      fetch("http://localhost:3001/signUp", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(this.props.signUpFormDetails)
      })
      .then(response => response.json())
      .then((jsonResponse) => {
        console.log(jsonResponse)
        
      })
      .catch((err) => console.log(err))
    }

    render(){
        if(!this.props.show3){
            return null;
        }
        return(
            <div className="modalDiv2">
              <div className="signupmodal">
                  <div className="leftModal">
                      <h1 className="boardRoom">BoardRoom</h1>
                  </div>
                  <div className="rightModal">
                      <div className="signupheader">
                          <button className="closeWrapper"><span className="close" onClick={this.onClose} >&times;</span></button>
                          <h3 className="welcome">Complete registration</h3>
                      </div>
                  
                      <div className="modalContent">
                        <button className="form-control signupsubmit" onClick={this.handleSignup}>Complete</button>
                      </div>                   
                      <p className="loginparagraph">Already Registered? <Link to="#">Sign in</Link></p>
                  </div>
                      </div>
                  </div>
        )
    }
}

const mapStateToProps = (state) => {
  const { userReducer } = state
  return {
    signUpFormDetails: userReducer.signUpFormDetails,
    showSignUp: userReducer.showSignUp
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    showSignup: (values) =>  dispatch(showSignup(values)),
    getSignupInputs: (values) => dispatch(getSignupInputs(values)),
    saveInitialUserDetails: (values) => dispatch(saveInitialUserDetails(values))
  }
}

  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CompleteSignUp));
