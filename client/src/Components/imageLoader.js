import React, { Component } from 'react'
    import { getInputForImage } from "../Actions/userActions"
import { connect } from "react-redux"

class imageLoader extends Component {

    handleImageInputs = (e) => {
        this.props.getInputForImage({[e.target.name]: e.target.value})
    }

    handleSubmit = async e => {
        e.preventDefault()
        console.log(this.props.imageInputs)
        const apiFetch = await fetch("http://localhost:3001/imageLoader", {
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(this.props.imageInputs)
        })
    }
    render() {
        console.log(this.props.imageInputs)
        return (
            <form encType="multipart/form-data">
                <input type="text" name="name" id="" placeholder="Name" onChange={this.handleImageInputs}/><br/><br/>
                <input type="file" name="image" accept="image/*" required onChange={this.handleImageInputs}/><br/><br/>
                <button className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
            </form>
        )
    }
}



const mapStateToProps = (state) => {
    const { userReducer } = state
    return {
        imageInputs: userReducer.imageInputs
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      getInputForImage: (values) => dispatch(getInputForImage(values))
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(imageLoader);
  