import React, { Component } from 'react'
import { Link } from "react-router-dom"

export default class AddNewRoom extends Component {
    render() {
        return (
            <div className="adminLandingPageWrapper">
                <div className=" container">
                    <div className="row" style={{height: "100" }}>
                        <div className="col-xl-2 "style={{borderRight:"1px solid black"}} >
                        <div style={{marginRight:"40px"}}>
                         <div className="LinkWrapper"><Link to="" className="adminLink">Admin</Link></div>
                        <div className="LinkWrapper"><Link to="adminDashboard" className="adminLink">Dashboard</Link></div>
                        <div className="LinkWrapper"><Link to="MeetingRooms" className="adminLink">Meeting Rooms</Link></div>
                        <div className="LinkWrapper"> <Link to="" className="adminLink">Bookings</Link></div>
                        <div className="LinkWrapper"><Link to="feedback" className="adminLink">Feedbacks</Link></div>
                        </div>
                        </div>
                        <div className="col-md-10">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="form">
                                        <form>
                                            <div style={{margin:"30px 0px 30px 90px"}}>
                                                <label for="roomType" className="addRoomInput">Room type</label>
                                                <input type="text" id="roomType" placeholder="Conference Room"></input>
                                            </div>
                                            <div className="roomAndLocation">
                                                <div>
                                                    <label for="location" className="addRoomInput">Location</label>
                                                    <input type="text" id="location" placeholder="Third Floor"></input>
                                                </div>
                                                <div>
                                                    <label for="RoomCapacity" className="addRoomInput">Room Capacity</label>
                                                    <input type="text" id="RoomCapacity" placeholder="25"></input>
                                                </div>
                                            </div>
                                            <div className="roomAndLocation">
                                                <div>
                                                    <label for="RoomName" className="addRoomInput"> Room Name</label>
                                                    <input type="text" id="RoomName" placeholder="Personal"></input>
                                                </div>
                                                <div>
                                                    <label for="RoomNumber" className="addRoomInput">Room Number</label>
                                                    <input type="text" id="RoomNumber" placeholder="305"></input>
                                                </div>
                                            </div>
                                            <div className="inputFile">
                                                <input type="file" id="file"></input>
                                            </div>
                                            <div style={{margin:"10px"}}>
                                            <h4 style={{margin:"20px"}}>Select Equipment/Features</h4>
                                            <div class="row">
                                                <div class="col-md-3">
                                                    <label><input type="checkbox" className="checkbox"></input>Projector</label>
                                                </div>
                                                <div class="col-md-3">
                                                    <label><input type="checkbox" className="checkbox"></input>Telephone</label>
                                                </div>
                                                <div class="col-md-3">
                                                    <label><input type="checkbox" className="checkbox"></input>Tv</label>
                                                </div>
                                                <div class="col-md-3">
                                                    <label><input type="checkbox" className="checkbox"></input>Air-condition</label>
                                                </div>
                                                <div class="col-md-3">
                                                    <label><input type="checkbox" className="checkbox"></input>Dispenser</label>
                                                </div>
                                                <div class="col-md-3">
                                                    <label><input type="checkbox" className="checkbox"></input>White Board</label>
                                                </div>
                                            </div>
                                            </div>
                                            <div>
                                                <input type="submit" value="Add" className="addRoomButton"></input>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
