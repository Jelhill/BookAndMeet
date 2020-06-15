import React, { Component } from 'react'
import Room14 from "../../Images/room14.jpg"

export default class BookingPageLeftSide extends Component {
    render() {
        return (
            <div className="bookingPageLeftSide">
                <img src={Room14} alt="Image Room 14"/>
                <h3>Conference Room</h3>
                <p>Room 301, Third Floor, Main Building</p>
                <div className="formMessage">
                    Input data are used to process services that you have applied for, it would
                    also be used to contact you with newsletters and deal offers    
                </div>
            </div>
        )
    }
}
