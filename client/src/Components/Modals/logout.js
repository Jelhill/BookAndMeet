import React, {Component} from 'react';
import { showLogout } from "../../Actions/userActions"
import {withRouter} from 'react-router-dom'
import {connect } from 'react-redux'



class Logout extends Component{
    onClose = (e) => {
        e.preventDefault()
        this.props.showLogout(false) 
    }
    render(){
        if(!this.props.showLogout){
            return null;
        }
            return (
                <div>
                    <div className='logoutmodal'>
                    <h2 className="logoutheader">Log Out</h2>
                    <p className="logoutparagraph">Do you wish to log out?</p>
                    </div>
                </div>
            );
    }
}
const mapStateToProps = (state) => {
    const { userReducer } = state
    return {
      showLogout: userReducer.showLogOut,
    }
}
  
  const mapDispatchToProps = (dispatch) => {
    return {
      showLogout: () => dispatch(showLogout()),
    }
  }

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Logout));