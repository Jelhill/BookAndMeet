import React, { Component } from 'react'
import Header from '../Header'
import AdminSideMenu from './AdminSideMenu'
import { Link } from 'react-router-dom'


export default class AddAdminForm extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="adminLandingPageWrapper">
                    <AdminSideMenu />
                    <div className="adminRightSide">
                        <div className="bookingsContainer">
                            <div className="bookingsHeader">
                                <h4 className="history">Register Form </h4>
                            </div>
                            <div className="adminFormWrapper">
                                <form>
                                    <div className="doubleInputDiv2">
                                        <div>
                                            <label className="adminFormLabel">First Name</label><br></br>
                                            <input type="text" placeholder="Input your First name" className="adminFormInput"></input><br></br>
                                        </div>
                                        <div>
                                            <label className="adminFormLabel">last Name</label><br></br>
                                            <input type="text" placeholder="Input your Last name" className="adminFormInput"></input>
                                        </div>
                                    </div>
                                    <div className="adminFormEmailWrapper">
                                    <label className="adminFormLabel">Email</label><br></br>
                                    <input type="email" placeholder="Input your email address" className="adminFormEmail"></input>
                                    </div>
                                    
                                    <div className="doubleInputDiv2">
                                        <div>
                                            <label className="adminFormLabel">Staff Code</label><br></br>
                                            <input type="text" placeholder="SGA0.7"className="adminFormInput"></input><br></br>
                                        </div>
                                        <div>
                                            <label className="adminFormLabel">Department</label><br></br>
                                            <input type="text" placeholder="305" className="adminFormInput"></input>
                                        </div>
                                    </div>
                                    <div className="adminCheckBoxWrapper">
                                    <input type="checkbox" className="adminCheckBox"></input>
                                    <label className="adminCheckBoxLabel">I accept the terms and condition</label>
                                    </div>
                                    
                                    <div className="adminFormSubmitWrapper">
                                        <button className="adminFormSubmitButton">Add</button>
                                    </div>                                                                                  
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
