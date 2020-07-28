import React, { Component } from 'react'
import { Link, withRouter } from "react-router-dom"
import logo from "../Images/meeting.png"
import { connect } from 'react-redux'
import { updateStateForHeader } from "../Actions/userActions"

class Header extends Component {

    getWithExpiry = (key) => {
        const itemStr = localStorage.getItem(key)    
        if (!itemStr) {
          return false
        }        
        const item = JSON.parse(itemStr)
        const now = new Date()
        if (now.getTime() > item.expiry) {
          localStorage.removeItem(key)
          return false
        }
        return true
      }

    componentDidMount = async () => {        
        const response = this.getWithExpiry("token")
        this.props.updateStateForHeader(response)
        // console.log(this.props.renderPage)
    }

    render() {
        return (
            <div className="headerPurpleDiv">
                <div className="headerIconDiv">
                <div className="logoWrapper">
                    <img src={logo} alt="Logo"/>
                    <h2 className="logo">boardroom</h2>
                </div>
                {this.props.headerState === true ?
                <ul>
                    <li><Link to="#">Hi Taofeek</Link></li>
                    <li><Link to="#">History</Link></li>
                    <li><Link to="#">My Profile</Link></li>
                    <li><Link to="#">Logout</Link></li>
                </ul> 
                :
                <ul>
                    <li><Link to="#">Login</Link></li>
                    <li><Link to="#">Signup</Link></li>
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
        headerState: userReducer.headerState
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateStateForHeader: (value) => dispatch(updateStateForHeader(value)),
    }
}
  
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
  