import React, { Component } from 'react';
import { addList } from "../../Actions/catAction";
import { addRange } from "../../Actions/catAction";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import ImageRoom5 from "../../Images/room5.jpg"
import ImageRoom13 from "../../Images/room13.jpg"
import ImageRoom8 from "../../Images/room8.jpg"
import ImageRoom3 from "../../Images/room3.jpg"
import ImageRoom1 from "../../Images/room1.jpg"
import ImageRoom11 from "../../Images/room11.jpg"
import ImageRoom2 from "../../Images/room2.jpg"
import ImageRoom4 from "../../Images/room4.jpg"
import Header from "../Header";
import Footer2 from "../Footer2";
import SearchFilter from "../HomePage/SearchFilter";
import { updateStateWithRooms, saveCurrentRoom } from "../../Actions/roomActions"
import roomReducer from '../../Reducers/roomReducer';
import ImageAirConditioner from "../../Images/air-conditioner.png";
import ImageProjector from "../../Images/projector.png";
import ImageWaterCooler from "../../Images/water-cooler.png";
import ImagePresentation from "../../Images/presentation.png";
import ImageFriend from "../../Images/friend.png";



class Search extends Component {

    componentDidMount = async () => {
        await fetch("http://localhost:3001/getRooms", {
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
    }

    saveCurrentRoom = (room) => {
        this.props.saveCurrentRoom(room)
        this.props.history.push("/booking")
    }

    viewRoomDetails = (room) => {
        this.props.saveCurrentRoom(room)
        this.props.history.push("/aboutRoom")
    }
    render() {
        return (
            <div className="homePageWrapper">
                <Header />
                <SearchFilter />
                <div className="bookingRoomSearchWrapper">
                    {this.props.rooms.map((room, index) => {
                      return <div key={index}className="room1">
                        <img src={room.imageurl} alt="Room 5" />
                        <div className="roomFeatures">
                            <div className="boardRoomFeatures">
                                <Link onClick={() => this.viewRoomDetails(room)} ><span>{`${room.name}`}</span></Link>
                                    <span className="roomTypeSpan">{`(${room.type})`}</span>
                                <label>{room.available}</label>
                            </div>
                            <div className="roomNumber">
                                <label>{room.location}</label>
                            </div>
                           
                            <div className="features">
                                <p>Features:</p>
                            </div>
                            <div className="featureAccessories">
                                <div className="features1">
                                    <span><i className="fa fa-user-friends"></i></span>
                                    <div className="flexRoomItems">
                                    <img src={ImageFriend} width="27.59" height="20" alt="Room 5" />
                                        <span><p>Capacity</p></span>
                                        <span><p>{room.capacity} seats</p></span>
                                    </div>                                      
                                </div>
                            </div>
                            <div className="features1">
                                <span><i className="fa fa-user-friends"></i></span>
                                <div className="flexRoomItems">
                                <img src={ImageAirConditioner} width="27.59" height="20" alt="Room 5" />
                                    <span><p>Air Condition</p></span>
                                    <span><p>{room.airCondition ? "Yes" : "No"}</p></span>
                                </div>
                            </div>
                            <div className="features1">
                                <span><i className="fa fa-user-friends"></i></span>
                                <div className="flexRoomItems">
                                <img src={ImageProjector} width="27.59" height="20" alt="Room 5" />
                                    <span><p>Projector</p></span>
                                    <span><p>{room.projector ? "Yes" : "No"}</p></span>
                                </div>  
                            </div>
                            <div className="features1">
                            <span><i className="fa fa-user-friends"></i></span>
                                <div className="flexRoomItems">
                                <img src={ImageWaterCooler} width="27.59" height="20" alt="Room 5" />
                                    <span><p>Water Dispenser</p></span>
                                    <span><p>{room.waterDispenser ? "Yes" : "No"}</p></span>
                                </div>
                            </div>
                            <div className="features1">
                                <span><i className="fa fa-user-friends"></i></span>
                                <div className="flexRoomItems">
                                <img src={ImagePresentation} width="27.59" height="20" alt="Room 5" />
                                    <span><p>White Board</p></span>
                                    <span><p>{room.hasWhiteBoard ? "Yes" : "No"}</p></span>
                                </div>
                            </div>
                            {/* <Link to={{pathname: "/booking", room: room}} onClick={() => this.saveCurrentRoom(room)}><div className="bookNowLink">Book Now</div></Link>                             */}
                            <Link onClick={() => this.saveCurrentRoom(room)}><div className="bookNowLink">Book Now</div></Link>                            
                        </div>
                    </div>  
                    })}

                </div><br />
                <Footer2 />            
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
        saveCurrentRoom: (values) => dispatch(saveCurrentRoom(values))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Search);