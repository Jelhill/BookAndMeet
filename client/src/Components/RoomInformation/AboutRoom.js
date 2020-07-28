import React, { Component } from 'react'
import Room1 from "../../Images/room18.jpg"
import Footer2 from '../Footer2'
import ItemsInRoom from './ItemsInRoom'
import Header from '../Header'
import { Link } from "react-router-dom"
 
export default class AboutRoom extends Component {
    render() {
        return (
            <div className="aboutRoomContainer">
                <Header />
                <div className="aboutRoomNav">
                    <ul>
                        <Link to="home"><li>Meeting Rooms</li></Link>
                        <span><i className="fa fa-greater-than"></i></span>
                        <Link><li>Room Details</li></Link>
                    </ul>
                </div>
                
                <div className="aboutRoomBelowBar">
                    <div className="title-conf">
                        <h4>Conference Room</h4>
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
                        <img src={Room1} alt="RoomImage"/>
                        <ItemsInRoom />
                    </div>
                    
                    <div className="roomInfoBtnDIv">
                        <Link to="booking"><span>Book now</span></Link>
                    </div>
                </div>  
                <Footer2 />
            </div>
        )
    }
}
