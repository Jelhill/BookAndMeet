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
            <div className="loginBackground" onClick={this.onClose}>
                <div className="loginmodal">
                    <div className="LoginLeft">
                        <h1 className="boardRoom">BoardRoom</h1>
                    </div>
                    <div className="LoginRight">
                        <div className='LoginHeader'>
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

export default Login;