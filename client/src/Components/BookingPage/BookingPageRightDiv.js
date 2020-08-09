import React, { Component } from 'react'
import { connect } from 'react-redux'

function BookingPageRightDiv(props) {
    
    const { name, category } = props
    return (
        <div className="bookingPageRightSide">
            <div className="bookingRoomDetails">
                <h5>{name}</h5>
                <label>{category}</label>
            </div>
            <label className="fillMessage">Fill the booking form</label>
            <div className="checkInDiv">
                <div className="dateTime">
                    <label>Check in</label>
                    <input type="datetime-local"/>
                </div>
                <div className="dateTime">
                    <label>Check out</label>
                    <input type="datetime-local"/>
                </div>   
            </div>    
            
            <div className="checkInDiv">
                <input type="text" placeholder="Surname"/>                    
                <input type="text" placeholder="Firstname"/>                     
            </div>  
            <div className="checkInDiv2">
                <input type="email" placeholder="Email"/>
            </div>   
        
            <div className="bookingFormBtnDiv">
                <button className="button2">Book</button>
            </div>        
        </div>
        )
 }

 const mapStateToProps = (state) => {
    const { userReducer } = state
    const { roomReducer } = state
    return {
      renderPage: userReducer.renderPage,
      imageurl: roomReducer.currentRoom.imageurl,
      name: roomReducer.currentRoom.name,
      category: roomReducer.currentRoom.category,

    }
}

export default connect(mapStateToProps)(BookingPageRightDiv)