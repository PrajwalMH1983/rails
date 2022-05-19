import './App.css'
import Select from 'react-select'
import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Index from './components/Index'
import { useNavigate } from 'react-router-dom'

function App() {
  const navigate = useNavigate()

  // const onSubmit = (e) => {
  //   e.preventDefault()
  //   navigate('/users')
  // }

  return (
    <div className='App'>
      <Index />
    </div>
  )
}

export default App
