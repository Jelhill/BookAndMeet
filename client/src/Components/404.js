import React from 'react'
import { Link } from 'react-router-dom'
import Footer2 from './Footer2'
import Header from './Header'


export default function Error404() {
    return (
        <div className="Container404Page">
            <Header />
        <div className="Error">
            <div className="Big404">
                <p>404</p>
            </div>
            <div className="Ooops">
            <small>Ooops!!</small>
            </div>
            <div className="PageExist">
            <span>THAT PAGE DOESN'T EXIST OR IS UNAVAILABLE</span>
            </div>
            <Link to="/home"><button className="Button404">Go Back to Home</button></Link>
            
        </div>
        <Footer2 />
        </div>
    )
}
