import React, { Component } from 'react';
import { addList } from "../core copy/actions/catAction";
import { addRange } from "../core copy/actions/catAction";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import initialState from '../core copy/Data/data';
import RangeList from '../core copy/Data/data2';
import Main from '../HomePage/Main';
import Header from "../Header";






class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {

            search: "Search",
            categorys: [],
            range: []
        }
    }
    // componentWillMount() {
    //     this.setState({
    //         categorys: initialState,
    //         range: RangeList
    //     })
    // }


    updateSearch(event) {
        this.setState({ search: event.target.value })
    }


    render() {
        const handleSubmit = () => {


        }

        console.log(this.state.search)

        let filteredItems = this.props.rooms.filter(
            (items) => {
                return items.name.indexOf(this.state.search) !== 1
            }
        )
        console.log(filteredItems)
        let filteredItem = this.props.ranges.filter(
            (items) => {
                return items.name.indexOf(this.state.search) !== 1
            }
        )

        return (
            <div>
                <Header />
            <div className="searchResult">
            <div>  <p id="result1">Search Result:</p> </div>
            <div> <p id="result2">Conference not found</p>  </div>
        </div>
            <div className="homePageBody">
                <div className="homePageBodyLeft">
                    <div>
                        <button className="filter">Search Filter</button>
                    </div>
                    <div className="cat">
                        <p>Categories</p>
                    </div>


                    {filteredItems.map((items) => (
                        <div className="search-list">
                            <span>
                                <input className="radio-cat" type="radio" name="category"
                                    value={items.name} key={items.id} />
                            </span>
                            <label>{items.name}</label>
                        </div>
                    )
                    )}


                    <div>
                        <div className="cat">
                            <p>Capacity Range</p>
                        </div>

                        {filteredItem.map((items) => (
                            <div className="search-list">
                                <span>
                                    <input className="radio-cat" type="radio" name="category"
                                        value={items.name} key={items.id} />
                                </span>
                                <label>{items.name}</label>
                            </div>
                        )
                        )}
                    </div>
                    <div className="Search-button">
                        <button onClick={handleSubmit}>{this.state.search}</button>
                    </div>
                </div>
                <div className="homePageBodyRight">
                    
                    <div className="roomImages">

                    </div>
                  
                    <div className="roomList">

                        <div className="content1">
                            <div className="roomName"><Link>Conference Room</Link></div>
                            <div> <p className="address1">Room 301, Third floor, Main building.</p>
                                <p className="address2">Zemat Company Oojo, Ibadan</p> </div>
                            <div>    <span className="stars-active">
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                            </span></div>
                        </div>

                        <div className="content2">
                            <div className="capacity"> <p>Capacity</p> </div>
                            <div className="seats"> <p> 22 seats</p> </div>
                            <div><button className="button-book">Book now</button> </div>
                        </div>
                    </div>
                </div>

            </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    rooms: state.categories.rooms,
    ranges: state.ranges.ranges
})

export default connect(mapStateToProps, { addList, addRange })(Search);