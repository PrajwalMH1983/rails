import axios from 'axios'
import React, { Component } from 'react'

const USERS_REST_API_URL = 'http://localhost:8080/api'

class UserService {
  userInput(payload) {
    console.log('payload', payload)
    return axios.post(USERS_REST_API_URL + '/input', payload)
  }
  getUsers() {
    return axios.get(USERS_REST_API_URL + '/users')
  }
}
export default new UserService()
