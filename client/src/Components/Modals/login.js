import React, {Component} from 'react';
import { Link } from "react-router-dom"

class Login extends Component{
    onClose= e=>{
        this.props.onClose && this.props.onClose(e);
    };

    render(){
        if(!this.props.show){
            return null;
        }
        return(
            <div className="loginmodal">
                <div className="leftModal">
                    <h1 className="boardRoom">BoardRoom</h1>
                </div>
                <div className="rightModal">                
                    <button className="closeWrapper"><span className="close" onClick={this.onClose} >&times;</span></button>
                    <h3 className="welcomeSignIn">Sign In</h3>
  
                    <div className="modalContent">
                    <form>
                      <div className="formDiv">
                        <input type="text" className="form-control input" placeholder="Username" />
                        <input type="password" className="form-control input" placeholder="password" />
                          <input type="checkbox" name="rememberme" className="checkbox"></input>
                          <label for="rememberme">Remember me</label>
                          <span><Link className="forgetPassword">forget password ?</Link></span>
                        <button className="form-control signupsubmit">Login</button>
                      </div>
                    </form>
                    <div className="loginWithDiv">
                      <label className=""> Login with</label>
                      <div className="formSocialIconsDiv">
                        <Link><i className="fa fa-google"></i></Link>
                        <Link><i className="fa fa-facebook"></i></Link>
                        <Link><i className="fa fa-twitter"></i></Link>
                      </div>
                    </div>                    
                    <p className="loginparagraph">Don't have an account? <Link to="#">Sign up</Link></p>
                  </div>
                </div>

                </div>
            </div>
        )
    }
}

export default Login;