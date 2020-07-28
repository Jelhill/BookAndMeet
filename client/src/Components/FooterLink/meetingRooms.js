import React, { Component } from 'react'
import { Link } from "react-router-dom"
import room1 from "../../Images/room1.jpg"

export default class MeetingRooms extends Component {
    render() {
        return (
            <div className="adminLandingPageWrapper">
                <div className=" container-fluid">
                    <div className="row" style={{ height: "100" }}>
                        <div className="col-xl-2" style={{borderRight:"1px solid black"}} >
                        <div style={{marginRight:"40px"}}>
                         <div className="LinkWrapper"><Link to="" className="adminLink">Admin</Link></div>
                        <div className="LinkWrapper"><Link to="adminDashboard" className="adminLink">Dashboard</Link></div>
                        <div className="LinkWrapper"><Link to="MeetingRooms" className="adminLink">Meeting Rooms</Link></div>
                        <div className="LinkWrapper"> <Link to="" className="adminLink">Bookings</Link></div>
                        <div className="LinkWrapper"><Link to="feedback" className="adminLink">Feedbacks</Link></div>
                        </div>
                        </div>
                        <div className="col-md-10">
                            <div style={{marginLeft:"20px"}}>
                            <select name="Type" className="selectRoom">
                                <option value="Type">Type</option>
                            </select>
                            <button className="searchButton">Search</button>
                            <Link to="addnewroom" className="addRoom">Add New Room</Link>
                            </div>
                            <div className="container" style={{ margin: "20px" }}>
                                <div className="row">
                                    <div className="col-xm-3 roomCards">
                                        <img src={room1} alt="room1" className="roomImg"></img>
                                        <div className="deleteWrapper">
                                            <div>
                                                <span className="boardRoomTag">BoardRoom</span>
                                                <span className="available">Available</span>
                                            </div>
                                            <p className="roomLocation">Room 203 Second Floor, Main Building</p>
                                            <div className="buttonContainer">
                                                <span className="deleteButton">Delete</span>
                                                <span className="editButton">Edit</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xm-3 roomCards">
                                        <img src={room1} alt="room1" className="roomImg"></img>
                                        <div className="deleteWrapper">
                                            <div>
                                                <span className="boardRoomTag">BoardRoom</span>
                                                <span className="available">Available</span>
                                            </div>
                                            <p className="roomLocation">Room 203 Second Floor, Main Building</p>
                                            <div className="buttonContainer">
                                                <span className="deleteButton">Delete</span>
                                                <span className="editButton">Edit</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xm-3 roomCards">
                                        <img src={room1} alt="room1" className="roomImg"></img>
                                        <div className="deleteWrapper">
                                            <div>
                                                <span className="boardRoomTag">BoardRoom</span>
                                                <span className="available">Available</span>
                                            </div>
                                            <p className="roomLocation">Room 203 Second Floor, Main Building</p>
                                            <div className="buttonContainer">
                                                <span className="deleteButton">Delete</span>
                                                <span className="editButton">Edit</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xm-3 roomCards">
                                        <img src={room1} alt="room1" className="roomImg"></img>
                                        <div className="deleteWrapper">
                                            <div>
                                                <span className="boardRoomTag">BoardRoom</span>
                                                <span className="available">Available</span>
                                            </div>
                                            <p className="roomLocation">Room 203 Second Floor, Main Building</p>
                                            <div className="buttonContainer">
                                                <span className="deleteButton">Delete</span>
                                                <span className="editButton">Edit</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xm-3 roomCards">
                                        <img src={room1} alt="room1" className="roomImg"></img>
                                        <div className="deleteWrapper">
                                            <div>
                                                <span className="boardRoomTag">BoardRoom</span>
                                                <span className="available">Available</span>
                                            </div>
                                            <p className="roomLocation">Room 203 Second Floor, Main Building</p>
                                            <div className="buttonContainer">
                                                <span className="deleteButton">Delete</span>
                                                <span className="editButton">Edit</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xm-3 roomCards">
                                        <img src={room1} alt="room1" className="roomImg"></img>
                                        <div className="deleteWrapper">
                                            <div>
                                                <span className="boardRoomTag">BoardRoom</span>
                                                <span className="available">Available</span>
                                            </div>
                                            <p className="roomLocation">Room 203 Second Floor, Main Building</p>
                                            <div className="buttonContainer">
                                                <span className="deleteButton">Delete</span>
                                                <span className="editButton">Edit</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xm-3 roomCards">
                                        <img src={room1} alt="room1" className="roomImg"></img>
                                        <div className="deleteWrapper">
                                            <div>
                                                <span className="boardRoomTag">BoardRoom</span>
                                                <span className="available">Available</span>
                                            </div>
                                            <p className="roomLocation">Room 203 Second Floor, Main Building</p>
                                            <div className="buttonContainer">
                                                <span className="deleteButton">Delete</span>
                                                <span className="editButton">Edit</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xm-3 roomCards">
                                        <img src={room1} alt="room1" className="roomImg"></img>
                                        <div className="deleteWrapper">
                                            <div>
                                                <span className="boardRoomTag">BoardRoom</span>
                                                <span className="available">Available</span>
                                            </div>
                                            <p className="roomLocation">Room 203 Second Floor, Main Building</p>
                                            <div className="buttonContainer">
                                                <span className="deleteButton">Delete</span>
                                                <span className="editButton">Edit</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="nextPage" style={{textAlign:"center"}}>
                                <p>Showing result 1-8 of 36
                            <span>
                            <button className="preview">Preview</button>
                            <button className="navButton">1</button>
                            <button className="navButton">2</button>
                            <button className="navButton">3</button>
                            <button className="navButton">4</button>
                            <button className="navButton">5</button>
                            <button className="next">Next</button>
                            </span>
                            </p>  
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
