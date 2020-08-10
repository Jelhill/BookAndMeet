import React, { Component } from 'react'
import Room14 from "../../Images/room14.jpg"

const BookingPageLeftSide = ({room})  =>{

    return (
        <div className="bookingPageLeftSide">
            <img src={room.imageurl} alt="ImageRoom14"/>
        </div>
    )
}

export default BookingPageLeftSide