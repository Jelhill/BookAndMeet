import React, { Component } from 'react'
import { Link, withRouter } from "react-router-dom"
import logo from "../Images/meeting.png"
import { connect } from 'react-redux'


class Header extends Component {
    render() {
        return (
            <div className="headerPurpleDiv">
                <div className="headerIconDiv">
                <div className="logoWrapper">
                    <img src={logo} alt="Logo"/>
                    <h2 className="logo">boardroom</h2>
                </div>
                {this.props.renderPage === true ?
                <ul>
                    <li><Link to="">Hi Taofeek</Link></li>
                    <li><Link to="">History</Link></li>
                    <li><Link to="">My Profile</Link></li>
                    <li><Link to="">Logout</Link></li>
                </ul> 
                :
                <ul>
                    <li><Link>Login</Link></li>
                    <li><Link>Signup</Link></li>
                </ul> 
                }
                </div>
          
                <div>
            </div> 
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { userReducer } = state
    return {
      renderPage: userReducer.renderPage,
    }
}
  
    
export default withRouter(connect(mapStateToProps)(Header));
  