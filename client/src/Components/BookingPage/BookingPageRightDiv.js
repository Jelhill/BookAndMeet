import React from 'react'
import { connect } from 'react-redux'
import { getUserBookingDetails, showFailedBookingModal } from "../../Actions/bookingActions"
import { formatDateTime } from "../../Actions/helperFunctions"
// import FailedBooking from '../Modals/FailedBooking'

function BookingPageRightDiv(props) {
    
    const getBookingInputs = (e) => {
        props.getUserBookingDetails({[e.target.name]: e.target.value})
            
    }
    const failedBooking = ()=> {
            props.showfailedBookingModal(true)
    }

    const bookRoom = (e) => {
        e.preventDefault()
        const token = localStorage.token;
        console.log('tk',token);
        const { checkinDate, checkinTime, checkoutDate, checkoutTime, surname, firstname, email} = props.bookersDetails
        const { userId, roomId} = props
        const checkin = formatDateTime(checkinDate, checkinTime)
        const checkout = formatDateTime(checkoutDate, checkoutTime)
        const body = {checkin, checkout, surname, firstname, email, userId, roomId}
        if (token) {
            fetch("https://localhost:3001/bookRoom", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            })
                .then(response => response.json())
                .then((jsonResponse) => {
                    console.log(jsonResponse)
                })
                .catch((err) => console.log(err))
        }
        else{
            return failedBooking()
        }
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
                    <label>Check in Date :</label>
                    <input type="date" name="checkinDate" onChange={getBookingInputs}/>
                </div>
                <div className="dateTime">
                    <label>Check in time :</label>
                    <input type="time" name="checkinTime" onChange={getBookingInputs}/>
                </div>   
            </div>    
            <div className="checkInDiv">
                <div className="dateTime">
                    <label>Checkout date :</label>
                    <input type="date" name="checkoutDate" onChange={getBookingInputs}/>
                </div>
                <div className="dateTime">
                    <label>Checkout time :</label>
                    <input type="time" name="checkoutTime" onChange={getBookingInputs}/>
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
      showFailedBookingModal: bookingReducer.showfailedBookingModal
    //   roomId: roomReducer.currentRoom.id,
    //   roomId: roomReducer.roomId,
    //   userId: userReducer.userId
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        getUserBookingDetails: (values) => dispatch(getUserBookingDetails(values)),
        showfailedBookingModal: (values)=> dispatch(showFailedBookingModal(values))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookingPageRightDiv)