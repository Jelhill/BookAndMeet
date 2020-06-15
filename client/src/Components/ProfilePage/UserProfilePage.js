import React, { Component } from 'react'
import Header from "../Header"
import { Link } from "react-router-dom"
import avatar from "../../Images/avatar.png"
import Footer from '../Footer'

export default class UserProfilePage extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="userProfileBody">
                    <div className="userProfileLeft">
                        <h5>User Profile</h5>
                        <ul>
                            <Link><li>User Info</li></Link>
                            <Link><li>History</li></Link>
                            <Link><li>Downloads</li></Link>
                            <Link><li>Edit Profile</li></Link>
                            <Link><li>Notification</li></Link>
                        </ul>
                        <Link><p className="userProfileLogout">Logout</p></Link>
                    </div>
                    <div className="userProfileRight">
                        <div className="avatarDiv">
                            <img src={avatar} alt="Image Photo"/>
                            <div>
                                <h4>Jelhill Umaru</h4>
                                <p>Lagos Nigeria</p>
                            </div>
                        </div>
                        <div className="avatarDiv">
                            <div className="avatarInput">
                                <label htmlFor="">First Name</label><br/>
                                <input type="text" name=""/>
                            </div>
                            <div className="avatarInput">
                                <label htmlFor="">Last Name</label><br/>
                                <input type="text" name="" />
                            </div>
                        </div>
                        <div className="avatarDiv">
                            <div className="avatarInput">
                                <label htmlFor="">Email</label><br/>
                                <input type="text" name=""/>
                            </div>
                            <div className="avatarInput">
                                <label htmlFor="">Phone Number</label><br/>
                                <input type="text" name="" />
                            </div>
                        </div>
                        <div className="avatarDiv">
                            <div className="avatarInput">
                                <label htmlFor="">Gender</label><br/>
                                <input type="text" name=""/>
                            </div>
                            <div className="avatarInput">
                                <label htmlFor="">Staff Identity Code</label><br/>
                                <input type="text" name="" />
                            </div>
                        </div>    
                        <button className="profileButton">Save Changes</button>                
                    </div>
                </div> 
                <Footer />               
            </div>
        )
    }
}
