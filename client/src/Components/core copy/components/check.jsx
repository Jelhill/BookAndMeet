import React, { Component } from 'react'
// connect your component to your redux
import { connect } from 'react-redux'
// import the action itself 
import { getUsers } from '../actions/userActions'
import PropTypes from 'prop-types'

class Check extends Component {
  componentDidMount() {
    this.props.getUsers()
  }

  componentWillReceiveProps(nextProps) 
  {
    const { users } = nextProps
    if(users.length) {
      console.log(users)
    }
  }

  render() {
    return (
      <div>
        
      </div>
    )
  }
}

// to make sure everything is in order
Check.propTypes = {
  getUsers: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired
}

// map state to proops
const mapStateToProps = (state) => ({
  users: state.user.users
})

export default connect(mapStateToProps, {
  getUsers
})(Check);