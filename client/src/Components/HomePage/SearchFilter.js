import React, { Component } from 'react'

export default class seachFilter extends Component {
    render() {
        return (
            <div className="searchAreaDiv">
                <select name="" defaultValue={"Type"} className="">
                    <option disabled selected hidden>Type</option>
                    <option value="oneToTen">1 - 10 seats</option>
                    <option value="elevenToTwenty">11 - 50 seats</option>
                    <option value="fiftyOneToOneHundred">51 - 100 seats</option>
                    <option value="hundredToTwoHundred">101 - 200 seats</option>
                    <option value="aboveTwoHundred">Above 200 seats</option>
                </select>

                <select name="" defaultValue={"Capacity"} className="">
                    <option disabled selected hidden>Capacity</option>
                    <option value="oneToTen">1 - 10 seats</option>
                    <option value="elevenToTwenty">11 - 50 seats</option>
                    <option value="fiftyOneToOneHundred">51 - 100 seats</option>
                    <option value="hundredToTwoHundred">101 - 200 seats</option>
                    <option value="aboveTwoHundred">Above 200 seats</option>
                </select>
                <input type="dateTime-local"/>
                <button>Search</button>
            </div>

        )
    }
}
