import { Button } from 'bootstrap'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Select from 'react-select'
import UserComponent from '../components/UserComponent'
import UserService from '../services/UserService'

const Country = () => {
  const [formData, setFormData] = useState({
    country: '',
    language: '',
    subscription: '',
    devices: '',
  })
  const a = [
    { label: 'India', value: 1 },
    { label: 'USA', value: 2 },
    { label: 'Australia', value: 3 },
    { label: 'Canada', value: 4 },
    { label: 'France', value: 5 },
  ]
  const b = [
    { label: 'English', value: 1 },
    { label: 'Hindi', value: 2 },
    { label: 'Kannada', value: 3 },
    { label: 'Telugu', value: 4 },
    { label: 'Tamil', value: 5 },
  ]

  const c = [
    { label: 'AVOD', value: 1 },
    { label: 'SVOD', value: 2 },
    { label: 'TVOD', value: 3 },
  ]

  const d = [
    { label: 'iOS', value: 1 },
    { label: 'Android', value: 2 },
  ]
  const calculate = () => {
    UserService.getUsers().then((response) => {
      console.log('count', response.data)
      routeChange(response.data)
    })
  }
  const onChange = (e) => {
    console.log(e.target.value)
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  let navigate = useNavigate()
  const routeChange = (totalcount) => {
    let path = `/api/users`
    navigate(path, { state: { count: totalcount } })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    console.log('submit', formData)
    UserService.userInput(formData).then((response) => {
      console.log('response', response.data)
      calculate()
    })
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className='country'>
          <div className='container my-3'>
            <div className='row'>
              <div className='col-md-4'></div>
              <div className='col-md-2'>
                <select name='country' onChange={(e) => onChange(e)}>
                  {a.map((item, index) => (
                    <option value={item.label}>{item.label}</option>
                  ))}
                </select>
              </div>
              <div className='col-md-2'></div>
            </div>
          </div>
        </div>

        <div className='language'>
          <div className='container my-3'>
            <div className='row'>
              <div className='col-md-4'></div>
              <div className='col-md-2'>
                <select name='language' onChange={(e) => onChange(e)}>
                  {b.map((item, index) => (
                    <option value={item.label}>{item.label}</option>
                  ))}
                </select>
              </div>
              <div className='col-md-2'></div>
            </div>
          </div>
        </div>

        <div className='subscription'>
          <div className='container my-3'>
            <div className='row'>
              <div className='col-md-4'></div>
              <div className='col-md-2'>
                <select name='subscription' onChange={(e) => onChange(e)}>
                  {c.map((item, index) => (
                    <option value={item.label}>{item.label}</option>
                  ))}
                </select>
              </div>
              <div className='col-md-2'></div>
            </div>
          </div>
        </div>

        <div className='devices'>
          <div className='container my-3'>
            <div className='row'>
              <div className='col-md-4'></div>
              <div className='col-md-2'>
                <select name='devices' onChange={(e) => onChange(e)}>
                  {d.map((item, index) => (
                    <option value={item.label}>{item.label}</option>
                  ))}
                </select>
              </div>
              <div className='col-md-2'></div>
            </div>
          </div>
        </div>

        <input type='submit' name='Submit'></input>
      </form>
    </div>
  )
}

export default Country
