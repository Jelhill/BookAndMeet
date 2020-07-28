import React, { Component } from 'react'
import { Link } from "react-router-dom"
import room1 from "../../Images/room1.jpg"
import Header from "../Header"
import AdminSideMenu from "./AdminSideMenu"


export default class MeetingRooms extends Component {
    render() {
        return (
            <div>
            <Header />
            <div className="adminLandingPageWrapper">
                <AdminSideMenu />
                <div className="adminRightSide">
                    <div className="adminRightSideHeader">
                        <div className="adminRightSearchDiv">
                            <select name="Type" className="selectRoom">
                                <option value="Type">Type</option>
                            </select>
                            <button className="searchButton">Search</button>
                        </div>
                        <Link to="addnewroom" className="addRoom"><span>Add New Room</span></Link>
                    </div>
                    {/* <div className=""> */}
                        <div className="adminRightSideBody">
                            <div className="roomCards">
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
                    {/* </div> */}
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
        )
    }
}
