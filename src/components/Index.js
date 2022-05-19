import React from 'react'
import Country from './Country'
import Devices from './Devices'
import Language from './Language'
import Subscription from './Subscription'
import { Routes, Route } from 'react-router-dom'
import UserComponent from './UserComponent'

const Home = () => {
  return (
    <div>
      <Routes>
        <Route path='/api/input' element={<Country />}></Route>
        <Route path='/api/users' element={<UserComponent />}></Route>
      </Routes>
    </div>
  )
}

export default Home
