import React, { Component } from 'react'
import Room1 from "../../Images/room18.jpg"
import Footer2 from '../Footer2'
import ItemsInRoom from './ItemsInRoom'
import Header from '../Header'
import { Link } from "react-router-dom"
import { connect } from 'react-redux'
 
function AboutRoom (props) {
    
        const { roomName, roomImage } = props
    
        return (
            <div className="aboutRoomContainer">
                <Header />
                <div className="aboutRoomNav">
                    <ul>
                        <Link to="home"><li>Meeting Rooms</li></Link>
                        <span><i className="fa fa-greater-than"></i></span>
                        <li>Room Details</li>
                    </ul>
                </div>
                
                <div className="aboutRoomBelowBar">
                    <div className="title-conf">
                        <h4>{roomName}</h4>
                        <p>Room 301, 3rd Floor Main Building</p>
                    </div>
                    <span className="status">In Use</span>
                    <div className="availableIn">
                        <h5>Available In</h5>
                        <span>01:00:56</span>
                    </div>
                </div>
                
                <div className="bodyWhiteDiv">
                    <div className="imageAndItems">
                        <img src={roomImage} alt="RoomImage"/>
                        <ItemsInRoom  />
                    </div>
                    
                    <div className="roomInfoBtnDIv">
                        <Link to={"/booking"}><span>Book now</span></Link>
                        {/* <Link to={{pathname:"/booking", room: room}}><span>Book now</span></Link> */}
                    </div>
                </div>  
                <Footer2 />
            </div>
        )
    }


    const mapStateToProps = (state) => {
        const { userReducer } = state
        const { roomReducer } = state
        return {
          renderPage: userReducer.renderPage,
          roomName: roomReducer.currentRoom.name,
          roomImage: roomReducer.currentRoom.imageurl
        }
    }

    export default connect(mapStateToProps)(AboutRoom)