import React, { Component, Fragment } from 'react';
import { addList } from "../../Actions/catAction";
import { addRange } from "../../Actions/catAction";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import ImageRoom5 from "../../Images/room5.jpg"
import RangeList from "../../Data/data"
import roomList from "../../Data/data"
import Header from "../Header";
import Footer2 from "../Footer2";




class Search extends Component {
    
    render() {
       
        return (
            <Fragment>
                <Header />
                <div className="bookingRoomSearchWrapper">
                    <p className="searchLabel">Search Result</p>
                    <div>
                        <input className="searchInput" type="search" placeholder="search by room" />
                        <span className="filterIcon"><Link><i className="fa fa-filter"></i></Link></span>
                    </div>
                    <div className="room1">                        
                        <img src={ImageRoom5} alt="Room 5" />
                        <div className="boardRoomFeatures">                        
                            <span>Board room</span>
                            <label>Room 001,Ground floor, main building</label>                        
                            <Link><i className="fa fa-user-friends"></i></Link>
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


                    <div className="room1">                        
                        <img src={ImageRoom5} alt="Room 5" />
                        <div className="boardRoomFeatures">                        
                            <span>Board room</span>
                            <label>Room 001,Ground floor, main building</label>                        
                            <Link><i className="fa fa-user-friends"></i></Link>
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


                    <div className="room1">                        
                        <img src={ImageRoom5} alt="Room 5" />
                        <div className="boardRoomFeatures">                        
                            <span>Board room</span>
                            <label>Room 001,Ground floor, main building</label>                        
                            <Link><i className="fa fa-user-friends"></i></Link>
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


                    <div className="room1">                        
                        <img src={ImageRoom5} alt="Room 5" />
                        <div className="boardRoomFeatures">                        
                            <span>Board room</span>
                            <label>Room 001,Ground floor, main building</label>                        
                            <Link><i className="fa fa-user-friends"></i></Link>
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

                    <div className="room1">                        
                        <img src={ImageRoom5} alt="Room 5" />
                        <div className="boardRoomFeatures">                        
                            <span>Board room</span>
                            <label>Room 001,Ground floor, main building</label>                        
                            <Link><i className="fa fa-user-friends"></i></Link>
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

                    <div className="room1">                        
                        <img src={ImageRoom5} alt="Room 5" />
                        <div className="boardRoomFeatures">                        
                            <span>Board room</span>
                            <label>Room 001,Ground floor, main building</label>                        
                            <Link><i className="fa fa-user-friends"></i></Link>
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

                    <div className="room1">                        
                        <img src={ImageRoom5} alt="Room 5" />
                        <div className="boardRoomFeatures">                        
                            <span>Board room</span>
                            <label>Room 001,Ground floor, main building</label>                        
                            <Link><i className="fa fa-user-friends"></i></Link>
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

                    <div className="room1">                        
                        <img src={ImageRoom5} alt="Room 5" />
                        <div className="boardRoomFeatures">                        
                            <span>Board room</span>
                            <label>Room 001,Ground floor, main building</label>                        
                            <Link><i className="fa fa-user-friends"></i></Link>
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
                {/* <Footer2 /> */}
            </Fragment>
        )
    }
}





const mapStateToProps = (state) => ({
    rooms: state.categories.rooms,
    ranges: state.ranges.ranges
})

export default connect(mapStateToProps, { addList, addRange })(Search);