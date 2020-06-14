import React, { Component } from 'react'
import Room1 from "../../Images/room18.jpg"
import { Link } from "react-router-dom"
import Footer from '../Footer'
import ItemsInRoom from './ItemsInRoom'
 
export default class AboutRoom extends Component {
    render() {
        return (
            <div className="containerfluid">
                <div className="headerPurpleDiv">
                    <div className="headerIconDiv">
                        <div className="leftIconDiv">
                            <h3>Logo</h3>
                            <span><Link><i className="fa fa-home"></i></Link></span>

                        </div>
                        <div className="rightIconDiv"> 
                            <span className="font15 mgTop10">Welcome Jelhill</span>                             
                            <Link><span><i className="fa fa-whatsapp"></i></span></Link>
                            <Link><span><i className="fa fa-bars"></i></span></Link>
                            <Link><span><i className="fa fa-phone-alt"></i></span></Link>
                            <span className="font15 mgTop10">+2348025992525</span>                            
                        </div>
                    </div>
                    <div className="innerPurpleDiv">
                        <div className="inputButtonDiv">
                            <input type="text" className="inputSpecial" placeholder="Search Room"/>
                            <button className="buttonSpecial">Today: June 8, 2020</button>
                            <button className="buttonSpecial2">Today: June 8, 2020</button>
                            <i class="fa fa-calendar form-control-feedback"></i>
                        </div>                        
                    </div>
                </div> 

                <div className="bodyWhiteDiv">
                    <div className="title-conf">
                        <h4>CONFERENCE ROOM</h4>
                        <p>Room 301, 3rd Floor Main Building</p>
                    </div>
                    <img src={Room1} alt="Room Image"/>

                    <ItemsInRoom />

                    <div className="roomInfoBtnDIv">
                        <button>Book now</button>
                    </div>
                </div>  
                <Footer />
            </div>
        )
    }
}
