import React, { Component } from 'react'
import Header from '../Header'
import AdminSideMenu from './AdminSideMenu'

export default class Bookings extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="adminLandingPageWrapper">
                <AdminSideMenu />
                <div className="adminRightSide">
                    <div className="bookingsContainer">
                    <div className="bookingsHeader">
                    <h4 className="history">Bookings</h4>   
                        <select className="selectRoom">
                            <option value = "Private">Private</option>
                        </select>
                        <input type="date" placeholder="Start Date" className="date"></input>
                        <input type="date" placeholder="Start Date" className="date"></input>
                        <button className="searchButton">Search</button>
                    </div>
                    <div>
                    <table style={{ width: "100%" }}>
                                <tr>
                                    <th>MEETING ROOMS</th>
                                    <th>BOOKED BY</th>
                                    <th>TIME</th>
                                    <th>DATE</th>
                                    <th>STATUS</th>
                                </tr>
                                <tr>
                                    <td className="bold">Senate</td>
                                    <td>Temitope Daniel</td>
                                    <td>4:30 - 6:00</td>
                                    <td>07/09/2020</td>
                                    <td id="running">Running</td>
                                </tr>
                                <tr>
                                    <td className="bold">Conference Room</td>
                                    <td>Ope Taiwo</td>
                                    <td>7:00 - 9:00</td>
                                    <td>04/10/2020</td>
                                    <td id="completed">Completed</td>
                                </tr>
                                <tr>
                                    <td className="bold">Private Meeting Room</td>
                                    <td>Jelhill Umaru</td>
                                    <td>9:00 - 10:00</td>
                                    <td>12/12/2020</td>
                                    <td id="upcoming">Upcoming</td>
                                </tr>
                                <tr>
                                    <td className="bold">Private Meeting Room</td>
                                    <td>Taofeek John</td>
                                    <td>9:00 - 10:00</td>
                                    <td>12/12/2020</td>
                                    <td id="upcoming">Upcoming</td>
                                </tr>
                                <tr>
                                    <td className="bold">Private Meeting Room</td>
                                    <td>Temitope Daniel</td>
                                    <td>9:00 - 10:00</td>
                                    <td>12/12/2020</td>
                                    <td id="upcoming">Upcoming</td>
                                </tr>
                                <tr>
                                    <td className="bold">Private Meeting Room</td>
                                    <td>Olamide Opeyemi</td>
                                    <td>9:00 - 10:00</td>
                                    <td>12/12/2020</td>
                                    <td id="upcoming" >Upcoming</td>
                                </tr>
                                <tr>
                                    <td className="bold">Private Meeting Room</td>
                                    <td>Efe Franklin</td>
                                    <td>9:00 - 10:00</td>
                                    <td>12/12/2020</td>
                                    <td id="cancelled">Cancelled</td>
                                </tr>
                                <tr>
                                    <td className="bold">Private Meeting Room</td>
                                    <td>Temitope Daniel</td>
                                    <td>9:00 - 10:00</td>
                                    <td>12/12/2020</td>
                                    <td id="cancelled">Cancelled</td>
                                </tr>
                            </table>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}
