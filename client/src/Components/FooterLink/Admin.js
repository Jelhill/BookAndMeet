import React, { Component, Fragment } from 'react'
import AdminSideMenu from './AdminSideMenu';
import Header from '../Header';
import { Bar } from "react-chartjs-2"
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
                            <h6>Available Rooms</h6>
                            <p>15</p>
                            <p className="view-details">View Details</p>
                        </div>
                        <div className="notifier">
                        <h6>Booked Rooms</h6>
                            <p>11</p>
                            <p className="view-details">View Details</p>
                        </div>
                        <div className="notifier">
                        <h6>Cancellations</h6>
                            <p>5</p>
                            <p className="view-details">View Details</p>
                        </div>
                        <div className="notifier">
                        <h6>Feedbacks</h6>
                            <p>2</p>
                            <p className="view-details">View Details</p>
                        </div>
                    </div>
                    <div className="graphDiv">
                        <h6>Booking Rate</h6>
                        
                        <Bar data={this.props.chartData}
                            height={60}
                            width={200}
                            options={{maintainAspectRatio: false}}
                        />
                    </div>
                    
                    <h4>Today's Bookings</h4>
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