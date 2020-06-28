import React, {Component} from 'react';


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
                <div className="signUpLeft">
                    <h1 className="boardRoom">BoardRoom</h1>
                </div>
                <div className="signUpRight">
                    <div className="signupheader">
                        <button className="closeWrapper"><span className="close" onClick={this.onClose} >&times;</span></button>
                        <h3 className="welcome">Welcome</h3>
                    </div>
                    <div>
                        {this.props.children}
                    </div>
                </div>
            </div>
            </div>
        )
    }
}


export default SignUp;