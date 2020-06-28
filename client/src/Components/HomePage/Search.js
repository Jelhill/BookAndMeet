import React, { Component } from 'react';
import { addList } from "../../Actions/catAction";
import { addRange } from "../../Actions/catAction";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import ImageRoom5 from "../../Images/room5.jpg"
import RangeList from "../../Data/data"
import roomList from "../../Data/data"
import Header from "../Header";



class Search extends Component {
    
    render() {
       
        return (
            <div>
                <Header />
            <div className="bookingRoomSearch">
                <div className="searchName">
                    <h5>Search Result</h5>
                </div>
                <div>
                    <input className="searchButton" type="search" placeholder="search by room" />
                    <span className="filterIcon"><Link><i className="fa fa-filter"></i></Link></span>
                </div>
                <div className="roomsSearched">

                    <div className="room1">
                        <div>
                            <div className="roomroom">
                                <img src={ImageRoom5} alt="Room 5" className="roomImages" />

                                <div className="boardRoomFeatures">

                                    <div className="board">

                                        <p>Board room</p>
                                    </div>
                                    <div className="building">
                                        <p>Room 001,Ground floor, main building</p>
                                    </div>
                                    <span><Link><i className="fa fa-user-friends"></i></Link></span>
                                </div>
                            </div>

                             <div className="searchFeatures">
                                 <div className="features">
                                 <p>Features:</p>
                                 </div>
                         <div className="accessories">
                          <span><Link><i className="fa fa-chair"></i></Link></span>  
                          <span><Link><i className="fa fa-chair"></i></Link></span>
                          </div>
                          <p>20</p>  
                          </div> 
                        </div>
                        <div>
                        <div className="roomroom">
                                <img src={ImageRoom5} alt="Room 5" className="roomImages" />

                                <div className="boardRoomFeatures">

                                    <div className="board">

                                        <p>Board room</p>
                                    </div>
                                    <div className="building">
                                        <p>Room 001,Ground floor, main building</p>
                                    </div>
                                    <span><Link><i className="fa fa-user-friends"></i></Link></span>
                                </div>
                            </div>

                             <div className="searchFeatures">
                                 <div className="features">
                                 <p>Features:</p>
                                 </div>
                         <div className="accessories">
                          <span><Link><i className="fa fa-chair"></i></Link></span>  
                          <span><Link><i className="fa fa-chair"></i></Link></span>
                          </div>
                          <p>20</p>  
                          </div> 
                        </div>
                        <div>
                        <div className="roomroom">
                                <img src={ImageRoom5} alt="Room 5" className="roomImages" />

                                <div className="boardRoomFeatures">

                                    <div className="board">

                                        <p>Board room</p>
                                    </div>
                                    <div className="building">
                                        <p>Room 001,Ground floor, main building</p>
                                    </div>
                                    <span><Link><i className="fa fa-user-friends"></i></Link></span>
                                </div>
                            </div>

                             <div className="searchFeatures">
                                 <div className="features">
                                 <p>Features:</p>
                                 </div>
                         <div className="accessories">
                          <span><Link><i className="fa fa-chair"></i></Link></span>  
                          <span><Link><i className="fa fa-chair"></i></Link></span>
                          </div>
                          <p>20</p>  
                          </div> 
                        </div>
                       
                        <div>
                        <div className="roomroom">
                                <img src={ImageRoom5} alt="Room 5" className="roomImages" />

                                <div className="boardRoomFeatures">

                                    <div className="board">

                                        <p>Board room</p>
                                    </div>
                                    <div className="building">
                                        <p>Room 001,Ground floor, main building</p>
                                    </div>
                                    <span><Link><i className="fa fa-user-friends"></i></Link></span>
                                </div>
                            </div>

                             <div className="searchFeatures">
                                 <div className="features">
                                 <p>Features:</p>
                                 </div>
                         <div className="accessories">
                          <span><Link><i className="fa fa-chair"></i></Link></span>  
                          <span><Link><i className="fa fa-chair"></i></Link></span>
                          </div>
                          <p>20</p>  
                          </div> 
                        </div>
                        
                       
                       
                        
                    </div>

                </div>

            </div>
            </div>

        )
    }
}





const mapStateToProps = (state) => ({
    rooms: state.categories.rooms,
    ranges: state.ranges.ranges
})

export default connect(mapStateToProps, { addList, addRange })(Search);