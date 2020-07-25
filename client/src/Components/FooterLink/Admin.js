import React, { Component } from 'react'
import {Link} from "react-router-dom";
export default class Admin extends Component {
    render() {
        return (
            <div className="adminLandingPageWrapper">
            <div className=" container">
               <div className="row" style={{height:"100"}}>
                    <div className="col-xl-2" >
                        <div style={{margin:"40px"}}>
                        <h5 className="adminLink">Admin</h5>
                        <div className="adminLink"><Link to="adminDashboard">Dashboard</Link></div>
                        <div className="adminLink"><Link to="MeetingRooms">Meeting Rooms</Link></div>
                        <div className="adminLink"> <Link to="">Bookings</Link></div>
                        <div className="adminLink"><Link to="">Feedbacks</Link></div>
                        </div>
                    </div>
                    <div className="col-xl-10">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-2 notifier">
                                    <h7>Available Rooms</h7>
                                    <p>15</p>
                                    <p className="view-details">View Details</p>
                                </div>
                                <div className="col-sm-2 notifier">
                                <h7>Booked Rooms</h7>
                                    <p>11</p>
                                    <p className="view-details">View Details</p>
                                </div>
                                <div className="col-sm-2 notifier">
                                <h7>Cancellations</h7>
                                    <p>5</p>
                                    <p className="view-details">View Details</p>
                                </div>
                                <div className="col-sm-2 notifier">
                                <h7>Feedbacks</h7>
                                    <p>2</p>
                                    <p className="view-details">View Details</p>
                                </div>
                            </div>
                            <h4>Booking Rate</h4>
                            <p>Graph will be here</p>
                            <h4>Today's Bookings</h4>
                        <table style={{width:"100%"}}>
                            <tr>
                                <th>Room Type</th>
                                <th>Booked By</th>
                                <th>Date</th>
                                <th>Duration</th>
                                <th>Status</th>
                            </tr>
                            <tr>
                                <td>Senate Meeting Room</td>
                                <td>Temitope Daniel</td>
                                <td>07/06/20</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Conference Room</td>
                                <td>Temitope Daniel</td>
                                <td>07/06/20</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                            <td>Private Meeting Room</td>
                                <td>Temitope Daniel</td>
                                <td>07/06/20</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Conference Meeting Room</td>
                                <td>Temitope Daniel</td>
                                <td>07/06/20</td>
                                <td></td>
                                <td></td>
                            </tr>
                        </table>
                        </div>
                    </div>
               </div>
            </div>
        </div>
        )
    }
}
