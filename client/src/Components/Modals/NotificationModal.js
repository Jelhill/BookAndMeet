import React from 'react'
import { Modal } from "react-bootstrap"
import { connect } from 'react-redux'

function NotificationModal(props) {

    return (
            
      <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Login
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5>
          Please Login to book a room
        </h5>
      </Modal.Body>
      <Modal.Footer>
        <button onClick={props.onHide}>Close</button>
      </Modal.Footer>
    </Modal>
    );  
  }
  
const mapStateToProps = (state) => {
	const { userReducer } = state
	return {	
    showNotificationModal: userReducer.showNotificationModal
	}
  }

  const mapDispatchToProps = (dispatch) => {
    return {	

    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(NotificationModal)