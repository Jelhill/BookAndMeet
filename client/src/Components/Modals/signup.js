import React, {Component} from 'react';
import { Link } from "react-router-dom"
import CompleteSignUp from './CompleteSignUp';
import { connect } from 'react-redux';
import { showSignup, getSignupInputs, saveInitialUserDetails } from "../../Actions/userActions"

class SignUp extends Component{

  state = {
    show3: false,
  };

    onClose = (e) => {
      e.preventDefault()
      this.props.showSignup(false)
    }

    // onSignUp = e => {
    //   e.preventDefault();
    //   this.setState({
    //     show3: !this.state.show3
    //   }) 
    // };

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
        if(this.props.showSignUp === false){
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
                          <h3 className="modalTitle">Sign up</h3>
                      </div>
                  
                      <div className="modalContent">
                    <form>
                      <div className="formDiv">
                        <div className="doubleInputDiv">
                          <input type="text" name="surname" placeholder="Surname" onChange={this.getUserInput}/>
                          <input type="text" name="firstname" placeholder="First Name" onChange={this.getUserInput}/>  
                        </div>
                        <input type="email" name="email" className="input" placeholder="email" onChange={this.getUserInput}/>
                        <input type="password" name="password" className="input" placeholder="password" autoComplete="off" onChange={this.getUserInput}/>
                        <input type="password" name="confirmPassword" className="input" placeholder="confirm password" autoComplete="off" onChange={this.getUserInput}/>
                        <input type = "checkbox" name ="rememberme" value="" className="checkbox"></input>
                        <label htmlFor ="rememberme" >Remember me</label>
                        <button className="signupsubmit" onClick={this.handleSignup}>Sign Up</button>
                      </div>                   
                    </form>
                      <p className="loginparagraph">Already have an account? <Link to="#"><span>Sign in</span></Link></p>

                  </div>
                      </div>
                  </div>
                  <CompleteSignUp onClose={this.onSignUp} show3={this.state.show3} />
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

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
