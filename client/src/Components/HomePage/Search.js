import React, { Component } from 'react';
import { addList } from "../../Actions/catAction";
import { addRange } from "../../Actions/catAction";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import ImageRoom5 from "../../Images/room5.jpg"
import ImageRoom13 from "../../Images/room13.jpg"
import ImageRoom8 from "../../Images/room8.jpg"
import ImageRoom3 from "../../Images/room3.jpg"
import ImageRoom1 from "../../Images/room1.jpg"
import ImageRoom11 from "../../Images/room11.jpg"
import ImageRoom2 from "../../Images/room2.jpg"
import ImageRoom4 from "../../Images/room4.jpg"
import Header from "../Header";
import Footer2 from "../Footer2";




class Search extends Component {

    render() {
        return (
            <div className="homePageWrapper">
                <Header />
                <div className="bookingRoomSearchWrapper">
                    <div className="room1">
                        <img src={ImageRoom5} alt="Room 5" />
                        <div className="roomFeatures">
                            <div className="boardRoomFeatures">
                                <span>Board Room</span>
                                <label>Available</label>
                            </div>
                            <div className="roomNumber">
                                <label>Room 001,Ground floor, main building</label>
                            </div>
                           
                            <div className="features">
                                <p>Features:</p>
                            </div>
                            <div className="featureAccessories">
                                <div className="features1">
                                    <span><i className="fa fa-user-friends"></i></span>
                                    <div className="flexRoomItems">
                                        <span><p>Capacity</p></span>
                                        <span><p>50 seats</p></span>
                                    </div>                                      
                                </div>
                            </div>
                            <div className="features1">
                                <span><i className="fa fa-user-friends"></i></span>
                                <div className="flexRoomItems">
                                    <span><p>Air Condition</p></span>
                                    <span><p>Yes</p></span>
                                </div>
                            </div>
                            <div className="features1">
                                <span><i className="fa fa-user-friends"></i></span>
                                <div className="flexRoomItems">
                                    <span><p>Projector</p></span>
                                    <span><p>Yes</p></span>
                                </div>
                            </div>
                            <div className="features1">
                            <span><i className="fa fa-user-friends"></i></span>
                                <div className="flexRoomItems">
                                    <span><p>Water Dispenser</p></span>
                                    <span><p>Yes</p></span>
                                </div>
                            </div>
                            <div className="features1">
                                <span><i className="fa fa-user-friends"></i></span>
                                <div className="flexRoomItems">
                                    <span><p>White Board</p></span>
                                    <span><p>No</p></span>
                                </div>
                            </div>
                            <Link to="booking"><div className="bookNowLink">Book Now</div></Link>
                            
                        </div>
                    </div>


                    <div className="room1">
                        <img src={ImageRoom8} alt="Room 5" />
                        <div className="roomFeatures">
                            <div className="boardRoomFeatures">
                                <span>Board Room</span>
                                <label>Available</label>
                            </div>
                            <div className="roomNumber">
                                <label>Room 001,Ground floor, main building</label>
                            </div>
                           
                            <div className="features">
                                <p>Features:</p>
                            </div>
                            <div className="featureAccessories">
                                <div className="features1">
                                    <span><i className="fa fa-user-friends"></i></span>
                                    <div className="flexRoomItems">
                                        <span><p>Capacity</p></span>
                                        <span><p>50 seats</p></span>
                                    </div>                                      
                                </div>
                            </div>
                            <div className="features1">
                                <span><i className="fa fa-user-friends"></i></span>
                                <div className="flexRoomItems">
                                    <span><p>Air Condition</p></span>
                                    <span><p>Yes</p></span>
                                </div>
                            </div>
                            <div className="features1">
                                <span><i className="fa fa-user-friends"></i></span>
                                <div className="flexRoomItems">
                                    <span><p>Projector</p></span>
                                    <span><p>Yes</p></span>
                                </div>
                            </div>
                            <div className="features1">
                            <span><i className="fa fa-user-friends"></i></span>
                                <div className="flexRoomItems">
                                    <span><p>Water Dispenser</p></span>
                                    <span><p>Yes</p></span>
                                </div>
                            </div>
                            <div className="features1">
                                <span><i className="fa fa-user-friends"></i></span>
                                <div className="flexRoomItems">
                                    <span><p>White Board</p></span>
                                    <span><p>No</p></span>
                                </div>
                            </div>
                            <Link to="booking"><div className="bookNowLink">Book Now</div></Link>
                            
                        </div>
                    </div>


                    <div className="room1">
                        <img src={ImageRoom13} alt="Room 5" />
                        <div className="roomFeatures">
                            <div className="boardRoomFeatures">
                                <span>Board Room</span>
                                <label>Available</label>
                            </div>
                            <div className="roomNumber">
                                <label>Room 001,Ground floor, main building</label>
                            </div>
                           
                            <div className="features">
                                <p>Features:</p>
                            </div>
                            <div className="featureAccessories">
                                <div className="features1">
                                    <span><i className="fa fa-user-friends"></i></span>
                                    <div className="flexRoomItems">
                                        <span><p>Capacity</p></span>
                                        <span><p>50 seats</p></span>
                                    </div>                                      
                                </div>
                            </div>
                            <div className="features1">
                                <span><i className="fa fa-user-friends"></i></span>
                                <div className="flexRoomItems">
                                    <span><p>Air Condition</p></span>
                                    <span><p>Yes</p></span>
                                </div>
                            </div>
                            <div className="features1">
                                <span><i className="fa fa-user-friends"></i></span>
                                <div className="flexRoomItems">
                                    <span><p>Projector</p></span>
                                    <span><p>Yes</p></span>
                                </div>
                            </div>
                            <div className="features1">
                            <span><i className="fa fa-user-friends"></i></span>
                                <div className="flexRoomItems">
                                    <span><p>Water Dispenser</p></span>
                                    <span><p>Yes</p></span>
                                </div>
                            </div>
                            <div className="features1">
                                <span><i className="fa fa-user-friends"></i></span>
                                <div className="flexRoomItems">
                                    <span><p>White Board</p></span>
                                    <span><p>No</p></span>
                                </div>
                            </div>
                            <Link to="booking"><div className="bookNowLink">Book Now</div></Link>
                            
                        </div>
                    </div>

                    <div className="room1">
                        <img src={ImageRoom3} alt="Room 5" />
                        <div className="roomFeatures">
                            <div className="boardRoomFeatures">
                                <span>Board Room</span>
                                <label>Available</label>
                            </div>
                            <div className="roomNumber">
                                <label>Room 001,Ground floor, main building</label>
                            </div>
                           
                            <div className="features">
                                <p>Features:</p>
                            </div>
                            <div className="featureAccessories">
                                <div className="features1">
                                    <span><i className="fa fa-user-friends"></i></span>
                                    <div className="flexRoomItems">
                                        <span><p>Capacity</p></span>
                                        <span><p>50 seats</p></span>
                                    </div>                                      
                                </div>
                            </div>
                            <div className="features1">
                                <span><i className="fa fa-user-friends"></i></span>
                                <div className="flexRoomItems">
                                    <span><p>Air Condition</p></span>
                                    <span><p>Yes</p></span>
                                </div>
                            </div>
                            <div className="features1">
                                <span><i className="fa fa-user-friends"></i></span>
                                <div className="flexRoomItems">
                                    <span><p>Projector</p></span>
                                    <span><p>Yes</p></span>
                                </div>
                            </div>
                            <div className="features1">
                            <span><i className="fa fa-user-friends"></i></span>
                                <div className="flexRoomItems">
                                    <span><p>Water Dispenser</p></span>
                                    <span><p>Yes</p></span>
                                </div>
                            </div>
                            <div className="features1">
                                <span><i className="fa fa-user-friends"></i></span>
                                <div className="flexRoomItems">
                                    <span><p>White Board</p></span>
                                    <span><p>No</p></span>
                                </div>
                            </div>
                            <Link to="booking"><div className="bookNowLink">Book Now</div></Link>
                            
                        </div>
                    </div>

                    <div className="room1">
                        <img src={ImageRoom1} alt="Room 5" />
                        <div className="roomFeatures">
                            <div className="boardRoomFeatures">
                                <span>Board Room</span>
                                <label>Available</label>
                            </div>
                            <div className="roomNumber">
                                <label>Room 001,Ground floor, main building</label>
                            </div>
                           
                            <div className="features">
                                <p>Features:</p>
                            </div>
                            <div className="featureAccessories">
                                <div className="features1">
                                    <span><i className="fa fa-user-friends"></i></span>
                                    <div className="flexRoomItems">
                                        <span><p>Capacity</p></span>
                                        <span><p>50 seats</p></span>
                                    </div>                                      
                                </div>
                            </div>
                            <div className="features1">
                                <span><i className="fa fa-user-friends"></i></span>
                                <div className="flexRoomItems">
                                    <span><p>Air Condition</p></span>
                                    <span><p>Yes</p></span>
                                </div>
                            </div>
                            <div className="features1">
                                <span><i className="fa fa-user-friends"></i></span>
                                <div className="flexRoomItems">
                                    <span><p>Projector</p></span>
                                    <span><p>Yes</p></span>
                                </div>
                            </div>
                            <div className="features1">
                            <span><i className="fa fa-user-friends"></i></span>
                                <div className="flexRoomItems">
                                    <span><p>Water Dispenser</p></span>
                                    <span><p>Yes</p></span>
                                </div>
                            </div>
                            <div className="features1">
                                <span><i className="fa fa-user-friends"></i></span>
                                <div className="flexRoomItems">
                                    <span><p>White Board</p></span>
                                    <span><p>No</p></span>
                                </div>
                            </div>
                            <Link to="booking"><div className="bookNowLink">Book Now</div></Link>
                            
                        </div>
                        {/* </div> */}
                        {/* </div> */}
                    </div>

                    <div className="room1">
                        <img src={ImageRoom11} alt="Room 5" />
                        <div className="roomFeatures">
                            <div className="boardRoomFeatures">
                                <span>Board Room</span>
                                <label>Available</label>
                            </div>
                            <div className="roomNumber">
                                <label>Room 001,Ground floor, main building</label>
                            </div>
                           
                            <div className="features">
                                <p>Features:</p>
                            </div>
                            <div className="featureAccessories">
                                <div className="features1">
                                    <span><i className="fa fa-user-friends"></i></span>
                                    <div className="flexRoomItems">
                                        <span><p>Capacity</p></span>
                                        <span><p>50 seats</p></span>
                                    </div>                                      
                                </div>
                            </div>
                            <div className="features1">
                                <span><i className="fa fa-user-friends"></i></span>
                                <div className="flexRoomItems">
                                    <span><p>Air Condition</p></span>
                                    <span><p>Yes</p></span>
                                </div>
                            </div>
                            <div className="features1">
                                <span><i className="fa fa-user-friends"></i></span>
                                <div className="flexRoomItems">
                                    <span><p>Projector</p></span>
                                    <span><p>Yes</p></span>
                                </div>
                            </div>
                            <div className="features1">
                            <span><i className="fa fa-user-friends"></i></span>
                                <div className="flexRoomItems">
                                    <span><p>Water Dispenser</p></span>
                                    <span><p>Yes</p></span>
                                </div>
                            </div>
                            <div className="features1">
                                <span><i className="fa fa-user-friends"></i></span>
                                <div className="flexRoomItems">
                                    <span><p>White Board</p></span>
                                    <span><p>No</p></span>
                                </div>
                            </div>
                            <Link to="booking"><div className="bookNowLink">Book Now</div></Link>
                            
                        </div>
                    </div>

                    <div className="room1">
                        <img src={ImageRoom2} alt="Room 5" />
                        <div className="roomFeatures">
                            <div className="boardRoomFeatures">
                                <span>Board Room</span>
                                <label>Available</label>
                            </div>
                            <div className="roomNumber">
                                <label>Room 001,Ground floor, main building</label>
                            </div>
                           
                            <div className="features">
                                <p>Features:</p>
                            </div>
                            <div className="featureAccessories">
                                <div className="features1">
                                    <span><i className="fa fa-user-friends"></i></span>
                                    <div className="flexRoomItems">
                                        <span><p>Capacity</p></span>
                                        <span><p>50 seats</p></span>
                                    </div>                                      
                                </div>
                            </div>
                            <div className="features1">
                                <span><i className="fa fa-user-friends"></i></span>
                                <div className="flexRoomItems">
                                    <span><p>Air Condition</p></span>
                                    <span><p>Yes</p></span>
                                </div>
                            </div>
                            <div className="features1">
                                <span><i className="fa fa-user-friends"></i></span>
                                <div className="flexRoomItems">
                                    <span><p>Projector</p></span>
                                    <span><p>Yes</p></span>
                                </div>
                            </div>
                            <div className="features1">
                            <span><i className="fa fa-user-friends"></i></span>
                                <div className="flexRoomItems">
                                    <span><p>Water Dispenser</p></span>
                                    <span><p>Yes</p></span>
                                </div>
                            </div>
                            <div className="features1">
                                <span><i className="fa fa-user-friends"></i></span>
                                <div className="flexRoomItems">
                                    <span><p>White Board</p></span>
                                    <span><p>No</p></span>
                                </div>
                            </div>
                            <Link to="booking"><div className="bookNowLink">Book Now</div></Link>
                            
                        </div>
                    </div>

                    <div className="room1">
                        <img src={ImageRoom4} alt="Room 5" />
                        <div className="roomFeatures">
                            <div className="boardRoomFeatures">
                                <span>Board Room</span>
                                <label>Available</label>
                            </div>
                            <div className="roomNumber">
                                <label>Room 001,Ground floor, main building</label>
                            </div>
                           
                            <div className="features">
                                <p>Features:</p>
                            </div>
                            <div className="featureAccessories">
                                <div className="features1">
                                    <span><i className="fa fa-user-friends"></i></span>
                                    <div className="flexRoomItems">
                                        <span><p>Capacity</p></span>
                                        <span><p>50 seats</p></span>
                                    </div>                                      
                                </div>
                            </div>
                            <div className="features1">
                                <span><i className="fa fa-user-friends"></i></span>
                                <div className="flexRoomItems">
                                    <span><p>Air Condition</p></span>
                                    <span><p>Yes</p></span>
                                </div>
                            </div>
                            <div className="features1">
                                <span><i className="fa fa-user-friends"></i></span>
                                <div className="flexRoomItems">
                                    <span><p>Projector</p></span>
                                    <span><p>Yes</p></span>
                                </div>
                            </div>
                            <div className="features1">
                            <span><i className="fa fa-user-friends"></i></span>
                                <div className="flexRoomItems">
                                    <span><p>Water Dispenser</p></span>
                                    <span><p>Yes</p></span>
                                </div>
                            </div>
                            <div className="features1">
                                <span><i className="fa fa-user-friends"></i></span>
                                <div className="flexRoomItems">
                                    <span><p>White Board</p></span>
                                    <span><p>No</p></span>
                                </div>
                            </div>
                            <Link to="booking"><div className="bookNowLink">Book Now</div></Link>
                            
                        </div>
                    </div>

                </div><br />
                <Footer2 />
            </div>
        )
    }
}





const mapStateToProps = (state) => ({
    rooms: state.categories.rooms,
    ranges: state.ranges.ranges
})

export default connect(mapStateToProps, { addList, addRange })(Search);