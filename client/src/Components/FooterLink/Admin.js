import React, { Component } from 'react'
import {Link} from "react-router-dom";
export default class Admin extends Component {
    render() {
        return (
            <div className="adminLandingPageWrapper">
            <div className=" container">
               <div className="row" style={{height:"100"}}>
                    <div className="col-xl-2" style={{borderRight:"1px solid black"}} >
                        <div>
                         <div className="LinkWrapper"><Link to="" className="adminLink">Admin</Link></div>
                        <div className="LinkWrapper"><Link to="adminDashboard" className="adminLink">Dashboard</Link></div>
                        <div className="LinkWrapper"><Link to="MeetingRooms" className="adminLink">Meeting Rooms</Link></div>
                        <div className="LinkWrapper"> <Link to="" className="adminLink">Bookings</Link></div>
                        <div className="LinkWrapper"><Link to="feedback" className="adminLink">Feedbacks</Link></div>
                        </div>
                    </div>
                    <div className="col-xl-10">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-2 notifier">
                                    <h6>Available Rooms</h6>
                                    <p>15</p>
                                    <p className="view-details">View Details</p>
                                </div>
                                <div className="col-sm-2 notifier">
                                <h6>Booked Rooms</h6>
                                    <p>11</p>
                                    <p className="view-details">View Details</p>
                                </div>
                                <div className="col-sm-2 notifier">
                                <h6>Cancellations</h6>
                                    <p>5</p>
                                    <p className="view-details">View Details</p>
                                </div>
                                <div className="col-sm-2 notifier">
                                <h6>Feedbacks</h6>
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
