import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getUserBookingDetails } from "../../Actions/bookingActions"

function BookingPageRightDiv(props) {
    
    const getBookingInputs = (e) => {
        props.getUserBookingDetails({[e.target.name]: e.target.value})
        // this.userInputValidation(e)
    }

    const bookRoom = (e) => {
        e.preventDefault()
        const { checkIn, checkOut, surname, firstname, email} = props.bookersDetails
        const { userId, roomId} = props
        const body = {checkIn, checkOut, surname, firstname, email, userId, roomId} 
        fetch("http://localhost:3001/bookRoom", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(body)
          })
          .then(response => response.json())
          .then((jsonResponse) => {
            console.log(jsonResponse)
            // if(jsonResponse.message === "success" && jsonResponse.token !== null){

            //   const currentRoute = this.props.history.location.pathname;
            //   setWithExpiry("token", jsonResponse.token, 180000, jsonResponse.payload)  
            //   if(currentRoute === "/"){
            //     this.props.history.push("home")
            //   }else{
            //     this.props.history.push(currentRoute)
            //   }  
              // window.location.reload(true)
            //   this.onClose()               
            // }       
          })
          .catch((err) => console.log(err))
    }

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
                    <input type="datetime-local" name="checkIn" onChange={getBookingInputs}/>
                </div>
                <div className="dateTime">
                    <label>Check out</label>
                    <input type="datetime-local" name="checkOut" onChange={getBookingInputs}/>
                </div>   
            </div>    
            
            <div className="checkInDiv">
                <input type="text" name="surname" placeholder="Surname" onChange={getBookingInputs}/>                    
                <input type="text" name="firstname" placeholder="Firstname" onChange={getBookingInputs}/>                     
            </div>  
            <div className="checkInDiv2">
                <input type="email" name="email" placeholder="Email" onChange={getBookingInputs}/>
            </div>   
        
            <div className="bookingFormBtnDiv">
                <button className="button2" onClick={bookRoom}>Book</button>
            </div>        
        </div>
    )
 }

 const mapStateToProps = (state) => {
    const { userReducer } = state
    const { roomReducer } = state
    const {bookingReducer } = state
    console.log(bookingReducer.userBookingDetails)
    return {
      renderPage: userReducer.renderPage,
      imageurl: roomReducer.currentRoom.imageurl,
      name: roomReducer.currentRoom.name,
      category: roomReducer.currentRoom.category,
      bookersDetails: bookingReducer.userBookingDetails,
      userId: userReducer.userId,
      firstname: userReducer.userFirstname,
      roomId: roomReducer.currentRoom.id
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        getUserBookingDetails: (values) => dispatch(getUserBookingDetails(values))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookingPageRightDiv)