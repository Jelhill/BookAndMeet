import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class SignUpContd extends Component {
    render() {
        return (
            <div className="loginBackground" onClick={this.onClose}>
            <div className="signUp2modal">
                <div className="LoginLeft">
                    <h1 className="boardRoom">BoardRoom</h1>
                </div>
                <div className="LoginRight">
                    <div className='LoginHeader'>
                        <button className="closeWrapper"><span className="close" onClick={this.onClose} >&times;</span></button>
                        <h3 className="welcome">Welcome</h3>
                    </div>
                    <p className="signUpContdParagraph">Please fill up the following to complete your sign up</p>
                    <div>
                        <form>
                            <div className="form-group signUpContdWrapper">
                                <input type="text" className=" signUpInput2" placeholder="First Name"/>
                                <input type="text" className="signUpInput2" placeholder="Last Name"/>
                                <input type="text" className="signUpInput2" placeholder="Phone number"/>
                                <input type="text" className="signUpInput2" placeholder="Gender"/>
                                <input type="text" className="signUpInput2" placeholder="Staff code"/>
                                <input type="text" className="signUpInput2" placeholder="Location"/>
                                <input type="submit" value="Submit" className="form-control signupsubmit" style={{margin:"30px"}} onClick={this.handleSignup} />
                            </div>
                        </form>
                            <p className="otherlogin" style={{margin:"10px"}}>Sign up with
                                <Link><i className="fa fa-google"></i></Link>
                                <Link><i className="fa fa-facebook"></i></Link>
                                <Link><i className="fa fa-twitter"></i></Link></p>
                            <p className="signUp2paragraph">Already have an account ? <Link>Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
