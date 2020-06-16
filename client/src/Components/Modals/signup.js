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
            <div className="signupmodal">
                <div className="signupheader">
                    <button className="closeWrapper"><span className="close" onClick={this.onClose} >&times;</span></button>
                    <h3 className="signuptitle">Sign up to continue</h3>
                </div>
                <div>
                    {this.props.children}
                </div>

            </div>
        )
    }
}


export default SignUp;