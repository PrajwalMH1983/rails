import React from 'react'
import Select from 'react-select'
import 'bootstrap/dist/css/bootstrap.min.css'
const actions = [
  { label: 'AVOD', value: 1 },
  { label: 'SVOD', value: 2 },
  { label: 'TVOD', value: 3 },
]
const Subscription = () => {
  return (
    <div className='subscription'>
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
export default Subscription
