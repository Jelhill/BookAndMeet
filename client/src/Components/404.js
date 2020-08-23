import React from 'react'
import { Link } from 'react-router-dom'
import Footer2 from './Footer2'
import Header from './Header'


export default function Error404() {
    return (
        <div className="Container404Page">
            {/* <Header /> */}
            <div className="Error">
            <div className="Big404">
                <p>401</p>
            </div>
            <div className="Ooops">
            <small>Ooops!!</small>
            </div>
            <div className="PageExist">
            <span>UNAUTHORIZED</span><br/>
            <span>Please Login to access this page</span>
            </div>
            <Link to="/home" className="Button404"> Go Back</Link>
            
        </div>
        {/* <Footer2 /> */}
        </div>
    )
}
