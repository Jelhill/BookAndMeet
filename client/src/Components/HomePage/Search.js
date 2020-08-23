import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import Header from "../Header";
import Footer2 from "../Footer2";
import SearchFilter from "../HomePage/SearchFilter";
import { updateStateWithRooms, saveCurrentRoom } from "../../Actions/roomActions"
import ImageAirConditioner from "../../Images/air-conditioner.png";
import ImageProjector from "../../Images/projector.png";
import ImageWaterCooler from "../../Images/water-cooler.png";
import ImagePresentation from "../../Images/presentation.png";
// import ImageFriend from "../../Images/friend.png";
// import Filter from '../LandingPage/Filter';



class Search extends Component {

    componentDidMount = async () => {
        await fetch("http://localhost:3001/getRooms", {
            method: "GET",
            headers: { "Content-type": "application/json" }
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
        const renderingRoom = this.props.filteredRoom.length ? this.props.filteredRoom : this.props.rooms
        console.log("rendering", renderingRoom)
        return (
            <div className="homePageWrapper">
                <Header />
                <SearchFilter />                
                    <small className="searchNotification">{ this.props.filteredRoom.length ? `${this.props.filteredRoom.length} Rooms Found`  : "No Record Found"}</small>

                <div className="bookingRoomSearchWrapper">
                    {renderingRoom.map((room, index) => {
                      return <div key={index}className="room1">
                        <img src={room.imageurl} alt="Room 5" />
                        <div className="roomFeatures">
                            <div className="boardRoomFeatures">
                                <Link to={`/aboutRoom/${room.id}`} ><span>{`${room.name}`}</span></Link>
                                    <span className="roomTypeSpan">{`(${room.type})`}</span>
                                <label>{room.available ? "Available" : "In use"}</label>
                            </div>
                            </div>
                            <div className="roomNumber">
                                <label>{room.location}</label>
                            </div>
                           
                            <div className="features">
                                <p>Features:</p>
                            </div>
                            <div className="featureAccessories">
                                <div className="features1">
                                    <span> <img src={ImageAirConditioner} alt="Room 5" /></span>
                                    <div className="flexRoomItems">
                                        <span><p>Air Condition</p></span>
                                        <span><p>{room.airCondition ? "Yes" : "No"}</p></span>
                                    </div>
                                </div>
                                <div className="features1">
                                    <span><img src={ImageProjector} alt="Room 5" /></span>
                                    <div className="flexRoomItems">
                                        <span><p>Projector</p></span>
                                        <span><p>{room.projector ? "Yes" : "No"}</p></span>
                                    </div>
                                </div>
                                <div className="features1">
                                    <span><img src={ImageWaterCooler} alt="Room 5" /></span>
                                    <div className="flexRoomItems">

                                        <span><p>Water Dispenser</p></span>
                                        <span><p>{room.waterDispenser ? "Yes" : "No"}</p></span>
                                    </div>
                                </div>
                                <div className="features1">
                                    <span><img src={ImagePresentation} alt="Room 5" /></span>
                                    <div className="flexRoomItems">
                                        <span><p>White Board</p></span>
                                        <span><p>{room.hasWhiteBoard ? "Yes" : "No"}</p></span>
                                    </div>
                                </div>
                                {/* <Link to={{pathname: "/booking", room: room}} onClick={() => this.saveCurrentRoom(room)}><div className="bookNowLink">Book Now</div></Link>                             */}
                                <Link onClick={() => this.saveCurrentRoom(room)}><div className="bookNowLink">Book Now</div></Link>
                            </div>
<<<<<<< HEAD
=======
                            {/* <Link to={{pathname: "/booking", room: room}} onClick={() => this.saveCurrentRoom(room)}><div className="bookNowLink">Book Now</div></Link>                             */}
                            <Link to={`/booking/${room.id}`}><div className="bookNowLink">Book Now</div></Link>                            
>>>>>>> development
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
        rooms: roomReducer.rooms,
        filteredRoom: roomReducer.filteredRoom
    }    
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateStateWithRooms: (values) => dispatch(updateStateWithRooms(values)),
        saveCurrentRoom: (values) => dispatch(saveCurrentRoom(values))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Search);