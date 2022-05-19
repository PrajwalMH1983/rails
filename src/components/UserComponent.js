import React, { Component } from 'react'
import { useLocation } from 'react-router-dom'
import UserService from '../services/UserService'

function UserComponent() {
  //Gets called as soon as a component is mounted.
  const location = useLocation()

  const componentDidMount = (props) => {
    UserService.userInput(props).then((response) => {
      this.setState({ data: response.data })
    })
  }
  const calculate = () => {
    console.log('hello')
    UserService.getUsers().then((response) => {
      this.setState({ data: response.data })
    })
  }

  return (
    <div>
      <h1 className='text-center'>Count of Users : {location.state.count}</h1>
    </div>
  )
}
export default UserComponent
