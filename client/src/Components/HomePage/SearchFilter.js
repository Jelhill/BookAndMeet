import React, { Component } from 'react';


export default class SearchFilter extends Component {

    render() {
        return (
            <div className="searchAreaDiv">
                <select name="" defaultValue={"Type"} >
                    <option disabled selected hidden>Type</option>
                    <option value="boardRoom">Board Room</option>
                    <option value="privateRoom">Private Room</option>
                    <option value="conferenceRoom">Conference</option>
                    <option value="auditorium">Auditorium</option>
                </select>

                <select name="" defaultValue={"Capacity"} >
                    <option disabled selected hidden>Capacity</option>
                    <option value="oneToTen">1 - 10 seats</option>
                    <option value="elevenToTwenty">11 - 50 seats</option>
                    <option value="fiftyOneToOneHundred">51 - 100 seats</option>
                    <option value="hundredToTwoHundred">101 - 200 seats</option>
                    <option value="aboveTwoHundred">Above 200 seats</option>
                </select>
                <input type="date"/>
                <input type="time"/>
                <button>Search</button>
            </div>

        )
    }
}



