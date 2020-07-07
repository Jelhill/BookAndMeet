import React, { Component } from 'react'
import Header from "../Header"
import Footer2 from "../Footer2"
import ItemsInRoom from '../RoomInformation/ItemsInRoom'
import BookingPageLeftSide from "./BookingPageLeftSide"
import BookingPageRightDiv from "./BookingPageRightDiv"
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { updateStateWithAPI } from "../../Actions/userActions"

class BookingForm extends Component {

    componentDidMount = async () => {
        await fetch("http://localhost:3001/booking",{
            method: "GET",
            headers: {"Content-type": "application/json", 
                        authorization: `Bearer ${window.localStorage.getItem("token")}`,
                        credentials: "include"
                     }
        })
        .then((response) => response.json())
        .then((jsonResponse) => {
            if(jsonResponse.message === true) {
                this.props.updateStateWithAPI(true);
            }else{
                this.props.history.push("/404")            
            }
        }).catch((err) => {
            console.log(err)
        })
    }

    render() {   

        return (      
            this.props.renderPage !== true ?
            this.props.renderPage :               
            <div>
                <Header />
                <div className="bookingPageBody">
                    <BookingPageLeftSide />
                    <BookingPageRightDiv />
                </div>
                <div class="bookingItemsInRoomDiv">
                    <ItemsInRoom />
                </div>       
                <div className="spaceDiv"></div>         
                <Footer2 />
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    const { userReducer } = state
    console.log(userReducer.renderPage)
    return {
      renderPage: userReducer.renderPage,
    }
}
  
  const mapDispatchToProps = (dispatch) => {
    return {
        updateStateWithAPI: (value) => dispatch(updateStateWithAPI(value)),
    }
  }
    
  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BookingForm));
  