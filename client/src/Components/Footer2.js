import React, { Component } from 'react'
import { Link } from "react-router-dom"

export default class Footer2 extends Component {
    render() {
        return (
            <div className="footer2Div">
                <div className="footerDiv1">
                    <Link><span>About us</span></Link>
                    <Link><span>Community</span></Link>
                    <Link><span>Top Booking</span></Link>
                    <Link><span>Contact</span></Link>
                </div>
                <div className="footerDiv2">
                    <Link><i className="fa fa-google"></i></Link>
                    <Link><i className="fa fa-facebook"></i></Link>
                    <Link><i className="fa fa-twitter"></i></Link>
                    <Link><i className="fa fa-instagram"></i></Link>
                </div>
            </div>
        )
    }
}
