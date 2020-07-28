import React, { Component } from 'react'

export default class ItemsInRoom extends Component {
    render() {
        return (
            <div className="roomInfoDiv">
                <div className="roomInfoSpanDiv">
                    <span><i className="fa fa-chair"></i></span> 
                    <div className="flexItemsInRoom">
                        <span>Capacity</span>
                        <span>22 Seats</span>
                    </div>
                </div>
                <div className="roomInfoSpanDiv">
                    <span><i className="fa fa-chair"></i></span> 
                    <div className="flexItemsInRoom">
                        <span>Air Condition</span>
                        <span>22 Seats</span>
                    </div>
                </div>
                <div className="roomInfoSpanDiv">
                    <span><i className="fa fa-chair"></i></span> 
                    <div className="flexItemsInRoom">
                        <span>Projector</span>
                        <span>22 Seats</span>
                    </div>
                </div>
                <div className="roomInfoSpanDiv">
                    <span><i className="fa fa-chair"></i></span> 
                    <div className="flexItemsInRoom">
                        <span>Water Dispenser</span>
                        <span>22 Seats</span>
                    </div>
                </div>
                <div className="roomInfoSpanDiv">
                    <span><i className="fa fa-chair"></i></span> 
                    <div className="flexItemsInRoom">
                        <span>White Board</span>
                        <span>22 Seats</span>
                    </div>
                </div>
            </div>
        )
    }
}
