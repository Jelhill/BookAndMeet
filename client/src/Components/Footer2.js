import React, { Component } from 'react'
import { Link } from "react-router-dom"

export default class Footer2 extends Component {
    render() {
        return (
            <div className="footer2Div">
                <div className="footerDiv1">
                    <Link to="aboutUs"><span>About us</span></Link>
                    <Link to="admin"><span>Admin</span></Link>
                    <Link to="feedbackForm"><span>Feedback</span></Link>
                </div>
            </div>
        )
    }
}
