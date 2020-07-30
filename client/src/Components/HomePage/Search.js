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
        console.log(this.props.rooms)

        return (
            <div className="homePageWrapper">
                <Header />
                <div className="bookingRoomSearchWrapper">
                    {/* <p className="searchLabel">Search Result</p> */}
                    {/* <div>
                        <input className="searchInput" type="search" placeholder="search by room" />
                        <div>
                            <span className="filterIcon"><Link><i className="fa fa-filter"></i></Link></span>
                        </div>
                    </div> */}
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
                                    <span><Link><i className="fa fa-user-friends"></i></Link></span>
                                    <span><p>Capacity</p></span>
                                    <span><p>50 seats</p></span>
                                </div>
                            </div>
                            <div className="features1">
                                <span><Link><i className="fa fa-user-friends"></i></Link></span>
                                <span><p>Air Condition</p></span>
                                <span><p>Yes</p></span>
                            </div>
                            <div className="features1">
                                <span><Link><i className="fa fa-user-friends"></i></Link></span>
                                <span><p>Projector</p></span>
                                <span><p>Yes</p></span>
                            </div>
                            <div className="features1">
                                <span><Link><i className="fa fa-user-friends"></i></Link></span>
                                <span><p>Water Dispenser</p></span>
                                <span><p>Yes</p></span>
                            </div>
                            <div className="features1">
                                <span><Link><i className="fa fa-user-friends"></i></Link></span>
                                <span><p>White Board</p></span>
                                <span><p>No</p></span>
                            </div>
                            <div className="bookNow">
                                <Link><span><button>Book Now</button></span></Link>
                            </div>
                        </div>
                        {/* </div> */}
                        {/* </div> */}
                    </div>


                    <div className="room1">
                        <img src={ImageRoom13} alt="Room 13" />
                        <div className="roomFeatures">
                            <div className="boardRoomFeatures">
                                <span>Board Room</span>
                                <label>Available</label>
                            </div>
                            <div className="roomNumber">
                                <label>Room 001,Ground floor, main building</label>
                            </div>
                            {/* <div className="searchFeatures"> */}
                            <div className="features">
                                <p>Features:</p>
                            </div>
                            <div className="feautureAccessories">
                                <div className="features1">
                                    <span><Link><i className="fa fa-user-friends"></i></Link></span>
                                    <span><p>Capacity</p></span>
                                    <span><p>50 seats</p></span>
                                </div>
                            </div>
                            <div className="features1">
                                <span><Link><i className="fa fa-user-friends"></i></Link></span>
                                <span><p>Air Condition</p></span>
                                <span><p>Yes</p></span>
                            </div>
                            <div className="features1">
                                <span><Link><i className="fa fa-user-friends"></i></Link></span>
                                <span><p>Projector</p></span>
                                <span><p>Yes</p></span>
                            </div>
                            <div className="features1">
                                <span><Link><i className="fa fa-user-friends"></i></Link></span>
                                <span><p>Water Dispenser</p></span>
                                <span><p>Yes</p></span>
                            </div>
                            <div className="features1">
                                <span><Link><i className="fa fa-user-friends"></i></Link></span>
                                <span><p>White Board</p></span>
                                <span><p>No</p></span>
                            </div>
                            <div className="bookNow">
                                <Link><span><button>Book Now</button></span></Link>
                            </div>
                        </div>
                        {/* </div> */}
                        {/* </div> */}
                    </div>


                    <div className="room1">
                        <img src={ImageRoom8} alt="Room 8" />
                        <div className="roomFeatures">
                            <div className="boardRoomFeatures">
                                <span>Board Room</span>
                                <label>Available</label>
                            </div>
                            <div className="roomNumber">
                                <label>Room 001,Ground floor, main building</label>
                            </div>
                            {/* <div className="searchFeatures"> */}
                            <div className="features">
                                <p>Features:</p>
                            </div>
                            <div className="feautureAccessories">
                                <div className="features1">
                                    <span><Link><i className="fa fa-user-friends"></i></Link></span>
                                    <span><p>Capacity</p></span>
                                    <span><p>50 seats</p></span>
                                </div>
                            </div>
                            <div className="features1">
                                <span><Link><i className="fa fa-user-friends"></i></Link></span>
                                <span><p>Air Condition</p></span>
                                <span><p>Yes</p></span>
                            </div>
                            <div className="features1">
                                <span><Link><i className="fa fa-user-friends"></i></Link></span>
                                <span><p>Projector</p></span>
                                <span><p>Yes</p></span>
                            </div>
                            <div className="features1">
                                <span><Link><i className="fa fa-user-friends"></i></Link></span>
                                <span><p>Water Dispenser</p></span>
                                <span><p>Yes</p></span>
                            </div>
                            <div className="features1">
                                <span><Link><i className="fa fa-user-friends"></i></Link></span>
                                <span><p>White Board</p></span>
                                <span><p>No</p></span>
                            </div>
                            <div className="bookNow">
                                <Link><span><button>Book Now</button></span></Link>
                            </div>
                        </div>
                        {/* </div> */}
                        {/* </div> */}
                    </div>

                    <div className="room1">
                        <img src={ImageRoom2} alt="Room 2" />
                        <div className="roomFeatures">
                            <div className="boardRoomFeatures">
                                <span>Board Room</span>
                                <label>Available</label>
                            </div>
                            <div className="roomNumber">
                                <label>Room 001,Ground floor, main building</label>
                            </div>
                            {/* <div className="searchFeatures"> */}
                            <div className="features">
                                <p>Features:</p>
                            </div>
                            <div className="feautureAccessories">
                                <div className="features1">
                                    <span><Link><i className="fa fa-user-friends"></i></Link></span>
                                    <span><p>Capacity</p></span>
                                    <span><p>50 seats</p></span>
                                </div>
                            </div>
                            <div className="features1">
                                <span><Link><i className="fa fa-user-friends"></i></Link></span>
                                <span><p>Air Condition</p></span>
                                <span><p>Yes</p></span>
                            </div>
                            <div className="features1">
                                <span><Link><i className="fa fa-user-friends"></i></Link></span>
                                <span><p>Projector</p></span>
                                <span><p>Yes</p></span>
                            </div>
                            <div className="features1">
                                <span><Link><i className="fa fa-user-friends"></i></Link></span>
                                <span><p>Water Dispenser</p></span>
                                <span><p>Yes</p></span>
                            </div>
                            <div className="features1">
                                <span><Link><i className="fa fa-user-friends"></i></Link></span>
                                <span><p>White Board</p></span>
                                <span><p>No</p></span>
                            </div>
                            <div className="bookNow">
                                <Link><span><button>Book Now</button></span></Link>
                            </div>
                        </div>
                        {/* </div> */}
                        {/* </div> */}
                    </div>

                    <div className="room1">
                        <img src={ImageRoom1} alt="Room 1" />
                        <div className="roomFeatures">
                            <div className="boardRoomFeatures">
                                <span>Board Room</span>
                                <label>Available</label>
                            </div>
                            <div className="roomNumber">
                                <label>Room 001,Ground floor, main building</label>
                            </div>
                            {/* <div className="searchFeatures"> */}
                            <div className="features">
                                <p>Features:</p>
                            </div>
                            <div className="feautureAccessories">
                                <div className="features1">
                                    <span><Link><i className="fa fa-user-friends"></i></Link></span>
                                    <span><p>Capacity</p></span>
                                    <span><p>50 seats</p></span>
                                </div>
                            </div>
                            <div className="features1">
                                <span><Link><i className="fa fa-user-friends"></i></Link></span>
                                <span><p>Air Condition</p></span>
                                <span><p>Yes</p></span>
                            </div>
                            <div className="features1">
                                <span><Link><i className="fa fa-user-friends"></i></Link></span>
                                <span><p>Projector</p></span>
                                <span><p>Yes</p></span>
                            </div>
                            <div className="features1">
                                <span><Link><i className="fa fa-user-friends"></i></Link></span>
                                <span><p>Water Dispenser</p></span>
                                <span><p>Yes</p></span>
                            </div>
                            <div className="features1">
                                <span><Link><i className="fa fa-user-friends"></i></Link></span>
                                <span><p>White Board</p></span>
                                <span><p>No</p></span>
                            </div>
                            <div className="bookNow">
                                <Link><span><button>Book Now</button></span></Link>
                            </div>
                        </div>
                        {/* </div> */}
                        {/* </div> */}
                    </div>

                    <div className="room1">
                        <img src={ImageRoom3} alt="Room 3" />
                        <div className="roomFeatures">
                            <div className="boardRoomFeatures">
                                <span>Board Room</span>
                                <label>Available</label>
                            </div>
                            <div className="roomNumber">
                                <label>Room 001,Ground floor, main building</label>
                            </div>
                            {/* <div className="searchFeatures"> */}
                            <div className="features">
                                <p>Features:</p>
                            </div>
                            <div className="feautureAccessories">
                                <div className="features1">
                                    <span><Link><i className="fa fa-user-friends"></i></Link></span>
                                    <span><p>Capacity</p></span>
                                    <span><p>50 seats</p></span>
                                </div>
                            </div>
                            <div className="features1">
                                <span><Link><i className="fa fa-user-friends"></i></Link></span>
                                <span><p>Air Condition</p></span>
                                <span><p>Yes</p></span>
                            </div>
                            <div className="features1">
                                <span><Link><i className="fa fa-user-friends"></i></Link></span>
                                <span><p>Projector</p></span>
                                <span><p>Yes</p></span>
                            </div>
                            <div className="features1">
                                <span><Link><i className="fa fa-user-friends"></i></Link></span>
                                <span><p>Water Dispenser</p></span>
                                <span><p>Yes</p></span>
                            </div>
                            <div className="features1">
                                <span><Link><i className="fa fa-user-friends"></i></Link></span>
                                <span><p>White Board</p></span>
                                <span><p>No</p></span>
                            </div>
                            <div className="bookNow">
                                <Link><span><button>Book Now</button></span></Link>
                            </div>
                        </div>
                        {/* </div> */}
                        {/* </div> */}
                    </div>

                    <div className="room1">
                        <img src={ImageRoom11} alt="Room 11" />
                        <div className="roomFeatures">
                            <div className="boardRoomFeatures">
                                <span>Board Room</span>
                                <label>Available</label>
                            </div>
                            <div className="roomNumber">
                                <label>Room 001,Ground floor, main building</label>
                            </div>
                            {/* <div className="searchFeatures"> */}
                            <div className="features">
                                <p>Features:</p>
                            </div>
                            <div className="feautureAccessories">
                                <div className="features1">
                                    <span><Link><i className="fa fa-user-friends"></i></Link></span>
                                    <span><p>Capacity</p></span>
                                    <span><p>50 seats</p></span>
                                </div>
                            </div>
                            <div className="features1">
                                <span><Link><i className="fa fa-user-friends"></i></Link></span>
                                <span><p>Air Condition</p></span>
                                <span><p>Yes</p></span>
                            </div>
                            <div className="features1">
                                <span><Link><i className="fa fa-user-friends"></i></Link></span>
                                <span><p>Projector</p></span>
                                <span><p>Yes</p></span>
                            </div>
                            <div className="features1">
                                <span><Link><i className="fa fa-user-friends"></i></Link></span>
                                <span><p>Water Dispenser</p></span>
                                <span><p>Yes</p></span>
                            </div>
                            <div className="features1">
                                <span><Link><i className="fa fa-user-friends"></i></Link></span>
                                <span><p>White Board</p></span>
                                <span><p>No</p></span>
                            </div>
                            <div className="bookNow">
                                <Link><span><button>Book Now</button></span></Link>
                            </div>
                        </div>
                        {/* </div> */}
                        {/* </div> */}
                    </div>

                    <div className="room1">
                        <img src={ImageRoom4} alt="Room 4" />
                        <div className="roomFeatures">
                            <div className="boardRoomFeatures">
                                <span>Board Room</span>
                                <label>Available</label>
                            </div>
                            <div className="roomNumber">
                                <label>Room 001,Ground floor, main building</label>
                            </div>
                            {/* <div className="searchFeatures"> */}
                            <div className="features">
                                <p>Features:</p>
                            </div>
                            <div className="feautureAccessories">
                                <div className="features1">
                                    <span><Link><i className="fa fa-user-friends"></i></Link></span>
                                    <span><p>Capacity</p></span>
                                    <span><p>50 seats</p></span>
                                </div>
                            </div>
                            <div className="features1">
                                <span><Link><i className="fa fa-user-friends"></i></Link></span>
                                <span><p>Air Condition</p></span>
                                <span><p>Yes</p></span>
                            </div>
                            <div className="features1">
                                <span><Link><i className="fa fa-user-friends"></i></Link></span>
                                <span><p>Projector</p></span>
                                <span><p>Yes</p></span>
                            </div>
                            <div className="features1">
                                <span><Link><i className="fa fa-user-friends"></i></Link></span>
                                <span><p>Water Dispenser</p></span>
                                <span><p>Yes</p></span>
                            </div>
                            <div className="features1">
                                <span><Link><i className="fa fa-user-friends"></i></Link></span>
                                <span><p>White Board</p></span>
                                <span><p>No</p></span>
                            </div>
                            <div className="bookNow">
                                <Link><span><button>Book Now</button></span></Link>
                            </div>
                        </div>
                        {/* </div> */}
                        {/* </div> */}
                    </div>


                </div><br />
                <Footer2 />            </div>
        )
    }
}





const mapStateToProps = (state) => ({
    rooms: state.categories.rooms,
    ranges: state.ranges.ranges
})

export default connect(mapStateToProps, { addList, addRange })(Search);