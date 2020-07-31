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
        if(!this.props.showLogoutModal){
            return null;
        }
        return (
            <div className="logoutModalDiv">
                <div className='logoutmodal'>
                  <h2 className="logoutheader">Log Out</h2>
                  <p className="logoutparagraph">Do you wish to log out?</p>
                  <div className="logoutButtonsDiv">
                    <button className="yesButton">Yes</button>
                    <button className="noButton">No</button>
                  </div>
                  
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    const { userReducer } = state
    console.log(">>>", userReducer.showLogOut)
    return {
      showLogoutModal : userReducer.showLogOut
    }
}
  
  const mapDispatchToProps = (dispatch) => {
    return {
      showLogout: (value) => dispatch(showLogout(value)),
    }
  }

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Logout));