import React, { Component } from 'react'
import { Link } from "react-router-dom"
import room1 from "../../Images/room1.jpg"
import Header from "../Header"
import AdminSideMenu from "./AdminSideMenu"
import { updateStateWithRooms } from "../../Actions/roomActions"
import { connect } from 'react-redux'


class MeetingRooms extends Component {

    componentDidMount =(() => {
        fetch("http://localhost:3001/getRooms", {
            method: "GET",
            headers: {"Content-type": "application/json"}
        })
        .then((response) => response.json())
        .then((jsonResponse) => {
            console.log(jsonResponse)
            this.props.updateStateWithRooms(jsonResponse.rooms)
        }).catch((error) => {
            console.log(error)
        })
    })

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
    
                        <div className="adminRightSideBody">

                        {this.props.rooms.map((room) => (
                            <div className="roomCards">
                                <img src={room.imageurl} alt="room1" className="roomImg"></img>
                                <div className="deleteWrapper">
                                    <div>
                                        <span className="boardRoomTag">{room.name}</span>
                                        <span className="available">Available</span>
                                    </div>
                                    {/* <p className="roomLocation">Room 203 Second Floor, Main Building</p> */}
                                    <div className="buttonContainer">
                                        <span className="deleteButton">Delete</span>
                                        <Link to={{pathname: `editRoomForm/${room.id}`, state: room}}><span className="editButton">Edit</span></Link>
                                    </div>
                                </div>
                            </div>
                        ))}                    
                       
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
        )
    }
}

const mapStateToProps = (state) => {
    const { roomReducer } = state
    return {
        rooms: roomReducer.rooms
    }    
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateStateWithRooms: (values) => dispatch(updateStateWithRooms(values)),
        // saveCurrentRoom: (values) => dispatch(saveCurrentRoom(values))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MeetingRooms)