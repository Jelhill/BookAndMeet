import React, { Component } from 'react'
import Room1 from "../../Images/room18.jpg"
import { Link } from "react-router-dom"
import Footer from '../Footer'
import ItemsInRoom from './ItemsInRoom'
import Header from '../Header'
 
export default class AboutRoom extends Component {
    render() {
        return (
            <div className="containerfluid">
                <Header />
                <div className="bodyWhiteDiv">
                    <div className="title-conf">
                        <h4>CONFERENCE ROOM</h4>
                        <p>Room 301, 3rd Floor Main Building</p>
                    </div>
                    <img src={Room1} alt="Room Image"/>
                    <ItemsInRoom />
                    <div className="roomInfoBtnDIv">
                        <button>Book now</button>
                    </div>
                </div>  
                <Footer />
            </div>
        )
    }
}
