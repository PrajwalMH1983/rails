import React from 'react'
import Select from 'react-select'
import 'bootstrap/dist/css/bootstrap.min.css'
const actions = [
  { label: 'iOS', value: 1 },
  { label: 'Android', value: 2 },
]

const Devices = () => {
  return (
    <div className='devices'>
      <div className='container my-3'>
        <div className='row'>
          <div className='col-md-4'></div>
          <div className='col-md-2'>
            <Select options={actions} />
          </div>
          <div className='col-md-2'></div>
        </div>
      </div>
    </div>
  )
}
export default Devices
