import React, { Component } from 'react'
import {Link} from "react-router-dom"

export default class Feedback extends Component {
    render() {
        return  (
        <div className="adminLandingPageWrapper">
        <div className=" container">
            <div className="row" style={{height: "100" }}>
                <div className="col-md-2 "style={{borderRight:"1px solid black"}} >
                <div style={{marginRight:"40px"}}>
                         <div className="LinkWrapper"><Link to="" className="adminLink">Admin</Link></div>
                        <div className="LinkWrapper"><Link to="adminDashboard" className="adminLink">Dashboard</Link></div>
                        <div className="LinkWrapper"><Link to="MeetingRooms" className="adminLink">Meeting Rooms</Link></div>
                        <div className="LinkWrapper"> <Link to="" className="adminLink">Bookings</Link></div>
                        <div className="LinkWrapper"><Link to="feedback" className="adminLink">Feedbacks</Link></div>
                        </div>
                </div>
                <div className="col-md-10">
                    <div className="container-fluid">
                    <div><h3 className="feedBacksHeader">Feedbacks</h3></div>
                        <div className="row">
                            <div className="feedBacksWrapper" style={{display:"flex"}}>
                                <div className="userIcon"><i className="far fa-user-circle userImage"></i></div>
                                <div className="feedBackContent">
                                    <div className="feedBackContentHeader">
                                        <div><span className="name">John Distin</span></div>
                                        <div><span className="time">24 hours ago</span></div>
                                    </div>
                                    <p className="content"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                    Aliquet hac mattis sit quis. Ac elementum pretium cras egestas eleifend ullamcorper nisl eu nulla. 
                                    Varius enim ipsum tortor, vitae, vel. 
                                    Viverra etiam elit fringilla orci augue sit pellentesque sem tellus.</p>
                                </div>
                            </div>
                            <div className="feedBacksWrapper" style={{display:"flex"}}>
                                <div className="userIcon"><i className="far fa-user-circle userImage"></i></div>
                                <div className="feedBackContent">
                                    <div className="feedBackContentHeader">
                                        <div><span className="name">John Distin</span></div>
                                        <div><span className="time">24 hours ago</span></div>
                                    </div>
                                    <p className="content"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                    Aliquet hac mattis sit quis. Ac elementum pretium cras egestas eleifend ullamcorper nisl eu nulla. 
                                    Varius enim ipsum tortor, vitae, vel. 
                                    Viverra etiam elit fringilla orci augue sit pellentesque sem tellus.</p>
                                </div>
                            </div>
                            <div className="feedBacksWrapper" style={{display:"flex"}}>
                                <div className="userIcon"><i className="far fa-user-circle userImage"></i></div>
                                <div className="feedBackContent">
                                    <div className="feedBackContentHeader">
                                        <div><span className="name">John Distin</span></div>
                                        <div><span className="time">24 hours ago</span></div>
                                    </div>
                                    <p className="content"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                    Aliquet hac mattis sit quis. Ac elementum pretium cras egestas eleifend ullamcorper nisl eu nulla. 
                                    Varius enim ipsum tortor, vitae, vel. 
                                    Viverra etiam elit fringilla orci augue sit pellentesque sem tellus.</p>
                                </div>
                            </div>
                            <div className="feedBacksWrapper" style={{display:"flex"}}>
                                <div className="userIcon"><i className="far fa-user-circle userImage"></i></div>
                                <div className="feedBackContent">
                                    <div className="feedBackContentHeader">
                                        <div><span className="name">John Distin</span></div>
                                        <div><span className="time">24 hours ago</span></div>
                                    </div>
                                    <p className="content"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                    Aliquet hac mattis sit quis. Ac elementum pretium cras egestas eleifend ullamcorper nisl eu nulla. 
                                    Varius enim ipsum tortor, vitae, vel. 
                                    Viverra etiam elit fringilla orci augue sit pellentesque sem tellus.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
    }
}
