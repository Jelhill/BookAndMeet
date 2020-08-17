import React from 'react'
import { connect } from 'react-redux'

function ItemsInRoom (props){
    const {hasAirCondition, hasProjector, hasWaterDispenser, hasWhiteBoard, capacity } = props
        return (
            <div className="roomInfoDiv">
                <div className="roomInfoSpanDiv">
                    <span><i className="fa fa-chair"></i></span> 
                    <div className="flexItemsInRoom">
                        <span>Capacity</span>
                        <span>{capacity} Seats</span>
                    </div>
                </div>
                <div className="roomInfoSpanDiv">
                    <span><i className="fa fa-chair"></i></span> 
                    <div className="flexItemsInRoom">
                        <span>Air Condition</span>
                        <span>{hasAirCondition ? "Yes" : "No"}</span>
                    </div>
                </div>
                <div className="roomInfoSpanDiv">
                    <span><i className="fa fa-chair"></i></span> 
                    <div className="flexItemsInRoom">
                        <span>Projector</span>
                        <span>{hasProjector ? "Yes" : "No"}</span>
                    </div>
                </div>
                <div className="roomInfoSpanDiv">
                    <span><i className="fa fa-chair"></i></span> 
                    <div className="flexItemsInRoom">
                        <span>Water Dispenser</span>
                        <span>{hasWaterDispenser ? "Yes" : "No"}</span>
                    </div>
                </div>
                <div className="roomInfoSpanDiv">
                    <span><i className="fa fa-chair"></i></span> 
                    <div className="flexItemsInRoom">
                        <span>White Board</span>
                        <span>{hasWhiteBoard ? "Yes" : "No"}</span>
                    </div>
                </div>
            </div>
        )
    }

    const mapStateToProps = (state) => {
        const { userReducer } = state
        const { roomReducer } = state
        return {
          renderPage: userReducer.renderPage,
          roomName: roomReducer.currentRoom.name,
          roomImage: roomReducer.currentRoom.imageurl,
          hasWhiteBoard: roomReducer.currentRoom.whiteBoard,
          hasWaterDispenser: roomReducer.currentRoom.waterDispenser,
          hasProjector: roomReducer.currentRoom.projector,
          hasAirCondition: roomReducer.currentRoom.airCondition,
          capacity: roomReducer.currentRoom.capacity,
        }
    }

    export default connect(mapStateToProps)(ItemsInRoom)