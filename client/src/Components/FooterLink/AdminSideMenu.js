import React, { Component } from 'react'
import { Link } from "react-router-dom"

export default class AdminSideMenu extends Component {
    render() {
        return (
            <div className="adminLeftSide">
            <h5>Admin</h5>
            <ul>
                <Link to="adminDashboard"><li >Dashboard</li></Link>
                <Link to="MeetingRooms"><li >Meeting Rooms</li></Link>
                <Link to="bookings"><li> Bookings</li></Link>
                <Link to="feedback"><li>Feedbacks</li></Link>
            </ul>
        </div>
        )
    }
}
