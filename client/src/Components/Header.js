import React, { Component } from 'react'
import { Link } from "react-router-dom"

export default class Header extends Component {
    render() {
        return (
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
          
                    <div>
                <div className="innerPurpleDiv">
                 <div className="navigations">
                    <div>Home</div>
                    <div id="vector">
                        <i className="fa fa-angle-right"></i>
                    </div>
                    <div>Search</div>
            </div> 
                    <div className="inputButtonDiv">
                        <input type="text" className="inputSpecial" placeholder="Search Room"/>
                        <button className="buttonSpecial">Today: June 8, 2020</button>
                        <button className="buttonSpecial2">Today: June 8, 2020</button>
                        <i class="fa fa-calendar form-control-feedback"></i>
                    </div>                        
                </div>
            </div> 
            </div>
        )
    }
}
