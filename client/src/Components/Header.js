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
    componentDidMount = async () => {        
        const response = getWithExpiry("token")
        this.props.updateStateForHeader(response)
    }

    handleSignIn = () => this.props.showSignin(true)
    openSignUpModal = () => this.props.showSignup(true)
    openLogOutModal = ()=>this.props.showLogout(true)

    render() {
        return (
            <div className="headerPurpleDiv">
                <div className="headerIconDiv">
                <div className="logoWrapper">
                    <img src={logo} alt="Logo"/>
                    <h2 className="logo">boardroom</h2>
                </div>
                {/* {this.props.headerState === true ? */}
                <ul>
                    <li><Link to="#">Hi Taofeek</Link></li>
                    <li><Link to="#">History</Link></li>
                    <li><Link to="user/profile">My Profile</Link></li>
<<<<<<< HEAD
                    <li><Link to="logout">Logout</Link></li>
=======
                    <li><Link to="logout" onClick={this.openLogOutModal}>Logout</Link></li>
>>>>>>> development
                </ul> 
                 {/* : */}
                <ul>
                    <li><Link to="#" className="noDecoration" onClick={this.handleSignIn}>Login</Link></li>
                    <li><Link to="#" className="noDecoration" onClick={this.openSignUpModal}>Signup</Link></li>
                    <Login />  
                    <Signup />
                </ul> 
<<<<<<< HEAD
                }
                </div>          
=======
                 {/* } */}
                </div>
          
>>>>>>> development
                <div>
            </div> 
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { userReducer } = state
    return {
        headerState: userReducer.headerState,
        showSignUp: userReducer.showSignUp,
        showSignIn: userReducer.showSignIn,
        showLogout : userReducer.showLogOut
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateStateForHeader: (value) => dispatch(updateStateForHeader(value)),
        showSignin: (values) => dispatch(showSignIn(values)),
        showSignup: (values) => dispatch(showSignup(values)) ,
        showLogout:()=>dispatch(showLogout())   
    }
}
  
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
  