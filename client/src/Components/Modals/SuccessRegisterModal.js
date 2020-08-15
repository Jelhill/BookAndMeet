import React, { Component } from 'react'
import {connect} from 'react-redux'
// import showRegSuccessfull from '../../Reducers/userReducer'
import {withRouter} from 'react-router-dom'


class SuccessRegisterModal extends Component {
  // onClose = () => {
  //   // e.preventDefault()
  //   this.props.showSuccessfullRegModal(false)  
  // }
  render() {
  //   if(!this.props.showSuccessfullRegModal){
  //     return null;
  // }
    return (
      <div className="modalDiv">
        <div className="signupmodal">
          <div className="leftModal">
            <h1 className="boardRoom">BoardRoom</h1>
          </div>
          <div className="rightModal">
          <button className="closeWrapper"><span className="close" onClick={this.onClose} >&times;</span></button>
                <div>
                  <div className="successContentWrapper">
                  <h1 className="thankyou">Thank You </h1>
                  <p className="paragraph1">Thank you for signing up with BoardRoom we hope you enjoy your time with us </p>
                  <p className="paragraph2">Check your account and update your profile</p>
                  </div>
                  <div>
                    <button className="contdButton">Continue</button>
                  </div>
                  <div><button className="myAccButton">My Account</button></div>
                </div>
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  const { userReducer } = state
  console.log('logging', userReducer.showSuccessfullRegModal);
  // const now = new Date()
  //     console.log("Login State", now.getTime(), userReducer.loggedInUserInfo)
  return {
    showSuccessfullRegModal: userReducer.showSuccessfullRegModal
  }
}

export default withRouter(connect(mapStateToProps)(SuccessRegisterModal));