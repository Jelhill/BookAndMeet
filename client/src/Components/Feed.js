import React, { Component } from 'react'
import Header from "./Header";
import Footer2 from "./Footer2";
export default class Feed extends Component {
  render() {
    return (
<div>
<Header/>
      <div className="bodyForm">
        
        <div className="contentBodyForm">
          <h5>Leave your Comment</h5><br />
          <div className="formNames">
            <span>firstName</span>
            <label>LastName</label>
          </div>

          <div className="inputFormContent">
            <span><input type="text" placeholder="input your first" /></span>
            <input type="text" placeholder="input your first" />
          </div>
          <div className="inputFormEmail">
            <h5>Email</h5>
            <input type="text" placeholder="input your email address" />
          </div>
          <div className="inputFormComment">
            <h5>Comment</h5>
            <textarea cols="76" rows="10" type="text" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet hac mattis sit quis.
             Ac elementum pretium cras egestas eleifend ullamcorper nisl eu nulla. Varius enim ipsum tortor, vitae, vel. 
             Viverra etiam elit fringilla orci augue sit pellentesque sem tellus." />
            <div className="inputFormSubmit">
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
      <Footer2 />
      </div>
    )
  }
}
