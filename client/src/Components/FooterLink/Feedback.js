import React, { Component, Fragment } from 'react'
import AdminSideMenu from './AdminSideMenu';
import Header from '../Header'


export default class Feedback extends Component {
    render() {
        return  (
            <Fragment>
            <Header />
                <div className="adminLandingPageWrapper">
                <AdminSideMenu />
                <div className="adminRightSide">
                    <h3 className="feedBacksHeader">Feedbacks</h3>
                    <div className="feedBacksWrapper">
                        <i className="far fa-user-circle userImage"></i>
                        <div className="feedBackContent">
                            <div className="feedBackContentHeader">
                                <span className="name">John Distin</span>
                                <span className="time">24 hours ago</span>
                            </div>
                            <p className="content"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Aliquet hac mattis sit quis. Ac elementum pretium cras egestas eleifend ullamcorper nisl eu nulla. 
                            Varius enim ipsum tortor, vitae, vel. 
                            Viverra etiam elit fringilla orci augue sit pellentesque sem tellus.</p>
                        </div>
                    </div>
                    <div className="feedBacksWrapper">
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
                    <div className="feedBacksWrapper">
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
                    <div className="feedBacksWrapper" >
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
        </Fragment>
        )
    }
}
