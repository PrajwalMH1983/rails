import React from 'react'
import Country from './Country'
import Devices from './Devices'
import Language from './Language'
import Subscription from './Subscription'

const Home = () => {
  return (
    <div>
      <Country />
      <Language />
      <Subscription />
      <Devices />
    </div>
  )
}

export default Home
