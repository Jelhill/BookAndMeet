import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import { showFailedBookingModal } from "../../Actions/bookingActions"

class FailedBooking extends Component {
    render() {
        if(!this.props.showFailedBookingModal){
            return null;
        }
        return (
            <div className="successfullbookingBackground">
            <div className="successfullbookingWrapper" >
                <div className="successfullbookingTop">hhhh</div>
                <div className="successfullbookingBottom" >
                    <h3 className="successfullbookingHeader">Ooops!</h3>
                    <p className="successfullbookingParagraph"> <Link to = "">Login</Link> or <Link to = "">SignUp</Link> to Book your favorite room</p>
                    <button className="successfullbookingLink">Back</button>
                </div>
            </div>
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { userReducer } = state
    const { roomReducer } = state
    const {bookingReducer } = state
    console.log(bookingReducer.userBookingDetails)
    return {
      showFailedBookingModal: bookingReducer.showfailedBookingModal
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        showfailedBookingModal: (values)=> dispatch(showFailedBookingModal(values))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FailedBooking)