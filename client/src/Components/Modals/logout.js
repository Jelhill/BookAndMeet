import React, {Component} from 'react';



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