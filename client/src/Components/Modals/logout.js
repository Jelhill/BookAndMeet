import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class Logout extends Component{
    render(){
        if(!this.props.show3){
            return null;
        }
            return (
                <div>
                    <div className='logoutmodal'>
                        {this.props.children}
                    </div>
                </div>
            );
    }
}


export default Logout;