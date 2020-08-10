import React, { Component, useEffect } from 'react'
import Header from "../Header"
import Footer2 from "../Footer2"
import BookingPageLeftSide from "./BookingPageLeftSide"
import BookingPageRightDiv from "./BookingPageRightDiv"
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { updateStateWithAPI } from "../../Actions/userActions"

const BookingForm = (props) => {

    const { roomImage } = props

    useEffect(() => {
        fetch("http://localhost:3001/booking",{
            method: "GET",
            headers: {"Content-type": "application/json", 
                authorization: `Bearer ${window.localStorage.getItem("token")}`,
                credentials: "include"
                }
        })
        .then((response) => response.json())
        .then((jsonResponse) => {
            if(jsonResponse.message === true) {
                props.updateStateWithAPI(true);
            }else{
                props.history.push("/404")            
            }
        }).catch((err) => {
            console.log(err)
        })
        // }
    })  

         return (      
            props.renderPage !== true ?
            props.renderPage :               
            <div>
                <Header />
                <div className="aboutRoomNav">
                    <ul>
                        <Link to="home"><li>Meeting Rooms</li></Link>
                        <span><i className="fa fa-greater-than"></i></span>
                        <Link to={"/aboutRoom"}><li>Booking Page</li></Link>
                    </ul>
                </div>
                <div className="bookingPageBody">
                    <div className="bookingPageLeftSide">
                         <img src={roomImage} alt="ImageRoom14"/>
                    </div>
                    <BookingPageRightDiv />
                </div>
                <div className="spaceDiv"></div>         
                <Footer2 />
            </div>
        )
    }


const mapStateToProps = (state) => {
    const { userReducer } = state
    const { roomReducer } = state
    return {
      renderPage: userReducer.renderPage,
      roomImage: roomReducer.currentRoom.imageurl
    }
}
  
  const mapDispatchToProps = (dispatch) => {
    return {
        updateStateWithAPI: (value) => dispatch(updateStateWithAPI(value)),
    }
  }
    
  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BookingForm));
  