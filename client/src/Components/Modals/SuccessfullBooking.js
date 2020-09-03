import React, { Component } from 'react'


export default class SuccessfullBooking extends Component {
    render() {
        if(!this.props.showLogoutModal){
            return null;
        }
        return (
            <div className="successfullbookingBackground">
                <div className="successfullbookingWrapper" >
                    <div className="successfullbookingTop">hhhh</div>
                    <div className="successfullbookingBottom" >
                        <h3 className="successfullbookingHeader">Success!</h3>
                        <p className="successfullbookingParagraph">Your Favorite Room has been booked Successfully</p>
                        <button className="successfullbookingLink">Continue</button>
                    </div>
                </div>
            </div>
        )
    }
}
