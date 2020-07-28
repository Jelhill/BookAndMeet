import React, { Component } from 'react'

export default class BookingPageRightDiv extends Component {
    render() {
        return (
            <div className="bookingPageRightSide">
                <h5>Fill the booking form</h5>
                <p>Select time duration</p>
                <div className="checkInDiv">
                    <div>
                        <label>Check in</label>
                        <input type="datetime-local"/>
                    </div>
                    <div>
                        <label>Check out</label>
                        <input type="datetime-local"/>
                    </div>   
                </div>    
                <div>
                    <span><input type="checkbox"/></span>
                    <label htmlFor="">Booking on behalf of someone?</label>
                </div>
                <div className="checkInDiv">
                    <input type="text" placeholder="Surname"/>                    
                    <input type="text" placeholder="Firstname"/>                     
                </div>  
                <div className="checkInDiv2">
                    <input type="email" placeholder="Email"/>
                </div>   
                <div className="checkInDiv2">
                    <input type="text" placeholder="Telephone"/>
                </div>  
                <div>
                    <span><input type="checkbox"/></span>
                </div>      
                <div className="bookingFormBtnDiv">
                    <button className="button1">Cancel</button>
                    <button className="button2">Book</button>
                </div>        
            </div>
        )
    }
}
