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

    onSignUp = e => {
      e.preventDefault();
      this.setState({
        show3: !this.state.show3
      }) 
    };

    getUserInput = (e) => {
      this.props.getSignupInputs({[e.target.name]: e.target.value})
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
                          <h3 className="welcome">Sign up</h3>
                      </div>
                  
                      <div className="modalContent">
                    <form>
                      <div className="formDiv">
                        <input type="text" name="username" className="form-control input" placeholder="username" onChange={this.getUserInput}/>
                        <input type="email" name="email" className="form-control input" placeholder="email" onChange={this.getUserInput}/>
                        <input type="password" name="password" className="form-control input" placeholder="password" autoComplete="off" onChange={this.getUserInput}/>
                        <input type="password" name="confirmPassword" className="form-control input" placeholder="confirm password" autoComplete="off" onChange={this.getUserInput}/>
                        <input type = "checkbox" name ="rememberme" value="" className="checkbox"></input>
                        <label htmlFor ="rememberme" >Remember me</label>
                        <button className="form-control signupsubmit" onClick={this.onSignUp}>Sign Up</button>
                      </div>                   
                    </form>
                    <div className="loginWithDiv">
                        <label className=""> Login with</label>
                        <Link to=""><i className="fa fa-google"></i></Link>
                        <Link to=""><i className="fa fa-facebook"></i></Link>
                        <Link to=""><i className="fa fa-twitter"></i></Link>
                    </div>
                      <p className="loginparagraph">Already Registered? <Link to="#">Sign in</Link></p>

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
