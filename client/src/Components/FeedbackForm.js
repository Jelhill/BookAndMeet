import React, { Component } from 'react'
import Header from "./Header";
import Footer2 from "./Footer2";
export default class Feed extends Component {
  render() {
    return (
    <div className="feedBackFormContainer">
      <Header/>
        <div className="feedbackFormWrapper">        
            <h5>Leave your Comment</h5><br />
            <div className="feedbackInputDiv">
              <div className="feedbackSmallInput">
                <label>First Name</label><br/>
                <input type="text" />
              </div>
              <div className="feedbackSmallInput">
                <label>Last Name</label><br/>
                <input type="text" />
              </div>
            </div>
            <div className="feedbackLongInput">
              <label>Email</label>
              <input type="text" />
            </div>
            <div className="feedbackCommentDiv">
              <label>Comment</label><br/>
              <textarea cols="76" rows="10" type="text" />            
            </div>
            <div className="feedbackBtnDiv"><button>Submit</button></div>
        </div>
      <Footer2 />
    </div>
    )
  }
}
