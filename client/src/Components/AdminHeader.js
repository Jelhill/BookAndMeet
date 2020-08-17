import React, { Component } from 'react'
import { Link, withRouter } from "react-router-dom"
import logo from "../Images/meeting.png"
import { connect } from 'react-redux'
import { updateStateForHeader, showSignup, showSignIn, showLogout } from "../Actions/userActions"
import Login from './Modals/Login'
import Signup from './Modals/Signup'
import { getWithExpiry } from "../Actions/helperFunctions"
import Logout from './Modals/Logout'

class Header extends Component {    
    handleSignIn = () => this.props.showSignin(true)
    openSignUpModal = () => this.props.showSignup(true)
    openLogOutModal = () => this.props.showLogout(true)

    render() {
        const response = getWithExpiry("token")
        this.props.updateStateForHeader(response)
        const now = new Date()
        console.log("Header Render", now.getTime(), this.props.user)
        const {isLoggedIn, firstname} = this.props.user
        return (
            <div className="headerPurpleDiv">
                <div className="headerIconDiv">
                    <div className="logoWrapper">
                        <Link to="/"><img src={logo} alt="Logo"/></Link>
                        <h2 className="logo">boardroom</h2>                    
                    </div>
                    
                    {isLoggedIn ?
                    
                    <ul>
                        <li><span>{firstname}</span></li>
                        <li><label><Link to="/AdminHeader">Admin</Link></label></li>
                        <li><Link to="#" onClick={this.openLogOutModal}>Logout</Link></li>
                        <Logout />
                    </ul> 
                    :
                    <ul>
                        <li><Link to="#" className="noDecoration" onClick={this.handleSignIn}>Login</Link></li>
                        <li><Link to="#" className="noDecoration" onClick={this.openSignUpModal}>Signup</Link></li>
                        <Login />  
                        <Signup />
                    </ul> 
                    }
                </div>          
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { userReducer } = state
    const now = new Date()
    console.log("Header Map State", now.getTime(), userReducer.loggedInUserInfo)
    return {
        user: userReducer.loggedInUserInfo,
        showSignUp: userReducer.showSignUp,
        showSignIn: userReducer.showSignIn,
        showLogoutModal : userReducer.showLogOut
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateStateForHeader: (values) => dispatch(updateStateForHeader(values)),
        showSignin: (values) => dispatch(showSignIn(values)),
        showSignup: (values) => dispatch(showSignup(values)) ,
        showLogout:(value) => dispatch(showLogout(value))   
    }
}
  
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
  