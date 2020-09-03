import React, { Component, Fragment } from 'react'
import AdminSideMenu from './AdminSideMenu';
import { Line } from "react-chartjs-2"
import { connect } from 'react-redux';
import AdminHeader from '../AdminHeader'

class Admin extends Component {
    render() {
        return (
            <Fragment>
            <AdminHeader/>
            <div className="adminLandingPageWrapper">
            <AdminSideMenu />
            <div className="adminRightSide">
                <div className="container">
                    <div className="row">
                        <div className="notifier">                
                            <span>Available Rooms</span>
                            <label>15</label>
                            <p className="view-details"></p>
                        </div>
                        <div className="notifier">
                            <span>Booked Rooms</span>
                            <label>11</label>                            
                            <p className="view-details"></p>
                        </div>
                        <div className="notifier">
                            <span>Cancellations</span>
                            <label>5</label>
                            <p className="view-details"></p>
                        </div>
                        <div className="notifier">
                            <span>Feedbacks</span>
                            <label>2</label>
                            <p className="view-details"></p>
                        </div>
                    </div>
                    <div className="bookingRate">
                        <span>Booking Rate</span>
                    </div>
                    <div className="graphDiv">
                        <Line data={this.props.chartData}
                            height={60}
                            width={200}
                            options={{maintainAspectRatio: false}}
                        />
                    </div>
                    <div className="bookingsToday">
                    <span>Today's Bookings</span>
                    </div>
                <table style={{width:"100%"}}>
                    <thead>
                        <tr>
                            <th>Room Type</th>
                            <th>Booked By</th>
                            <th>Date</th>
                            <th>Duration</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Senate Meeting Room</td>
                        <td>Temitope Daniel</td>
                        <td>07/06/20</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Conference Room</td>
                        <td>Temitope Daniel</td>
                        <td>07/06/20</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                    <td>Private Meeting Room</td>
                        <td>Temitope Daniel</td>
                        <td>07/06/20</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Conference Meeting Room</td>
                        <td>Temitope Daniel</td>
                        <td>07/06/20</td>
                        <td></td>
                        <td></td>
                    </tr>
                    </tbody>
                </table>
                </div>
            </div>
        </div>
        </Fragment>
        )
    }
}


const mapStateToProps = (state) => {
    const { bookingReducer } = state
    return {
        chartData: bookingReducer.chartData,
    }
}

export default connect(mapStateToProps)(Admin)