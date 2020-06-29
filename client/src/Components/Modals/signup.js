import React, {Component} from 'react';
import { Link } from "react-router-dom"



class SignUp extends Component{
    onClose = e=>{
        this.props.onClose && this.props.onClose(e);
    }
    render(){
        if(!this.props.show2){
            return null;
        }
        return(
            <div className="signUpBackground" onClick={this.onClose}>
            <div className="signupmodal">
                <div className="leftModal">
                    <h1 className="boardRoom">BorardRoom</h1>
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
                      <input type="password" name="password" className="form-control input" placeholder="password" onChange={this.getUserInput}/>
                      <input type="password" name="confirmPassword" className="form-control input" placeholder="confirm password" onChange={this.getUserInput}/>
                      <input type = "checkbox" name ="rememberme" value="" className="checkbox"></input>
                      <label for ="rememberme" >Remember me</label>
                      <button className="form-control signupsubmit" >Sign Up</button>
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
                    <p className="loginparagraph">Don't have an account ? <a href="#">Sign up</a></p>

                  {/* <p className="otherlogin">Sign up with <a href="#">Facebook</a></p>
                  <p className="otherlogin">Sign up with <a href="#">Google</a></p> */}
                </div>
                    </div>
                </div>
                </div>
        
        )
    }
}


export default SignUp;