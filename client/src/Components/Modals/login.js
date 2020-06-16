import React, {Component} from 'react';


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
                <div className='LoginHeader'>
                    <button className="closeWrapper"><span className="close" onClick={this.onClose} >&times;</span></button>
                    <h3 className="welcome">Welcome</h3>
                </div>
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Login;