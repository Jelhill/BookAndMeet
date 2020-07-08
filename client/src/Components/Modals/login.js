import React, {Component} from 'react';
import { Link } from "react-router-dom"
import { connect } from 'react-redux';
import { showSignIn } from "../../Actions/userActions"


class Login extends Component{

    onClose = (e) => {
        e.preventDefault()
        this.props.showSignin(false) 
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
                         <input type="text" className="form-control input" placeholder="Username" />
                         <input type="password" className="form-control input" placeholder="password" autoComplete="off" />
                           <input type="checkbox" name="rememberme" className="checkbox"></input>
                           <label htmlFor="rememberme">Remember me</label>
                           <span><Link className="forgetPassword">forget password ?</Link></span>
                         <button className="form-control signupsubmit">Login</button>
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
    return {
      showSignIn: userReducer.showSignIn
    }
}
  
  const mapDispatchToProps = (dispatch) => {
    return {
      showSignin: (values) => dispatch(showSignIn(values))
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Login);
  