import React, { Component } from 'react'
import Header from "../Header"
import Footer2 from "../Footer2"

import ItemsInRoom from '../RoomInformation/ItemsInRoom'
import BookingPageLeftSide from "./BookingPageLeftSide"
import BookingPageRightDiv from "./BookingPageRightDiv"

export default class BookingForm extends Component {
    render() {
        return (
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
