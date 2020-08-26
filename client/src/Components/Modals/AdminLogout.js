import React, {Component} from 'react';
import { showLogout } from "../../Actions/userActions"
import { withRouter, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { unprotectedRoutes } from "../../Data/data"

class AdminLogout extends Component{
  state = {
    navigate: false
  }
    onClose = () => {
        this.props.showLogout(false)
    }

    logoutAdmin = (e) => {
      e.preventDefault()
     this.setState({
       navigate:true
     })
      this.onClose()
      // const unprotected = unprotectedRoutes 
      // const currentRoute = this.props.history.location.pathname;
      // if(unprotected.includes(currentRoute)){
      //   window.location = `${currentRoute}`
      // }else{
      //   window.location = "/"
      // }
      
    }
    
    render(){
        if(!this.props.showLogoutModal){
            return null;
        }
        const {navigate} = this.state
        if(navigate) {
          return <Redirect to = '/' push = {true}/>
        }
        return (
            
            <div className="logoutModalDiv">
                <div className='logoutmodal'>
                  <h2>Log Out</h2>
                  <p className="logoutparagraph">Do you wish to log out?</p>
                  <div className="logoutButtonsDiv">
                    <button className="yesButton" onClick={this.logoutAdmin}>Yes</button>
                    <button className="noButton" onClick={this.onClose}>No</button>
                  </div>                  
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    const { userReducer } = state
    return {
      showLogoutModal : userReducer.showLogOut
    }
}
  
  const mapDispatchToProps = (dispatch) => {
    return {
      showLogout: (value) => dispatch(showLogout(value)),
    }
  }

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AdminLogout));