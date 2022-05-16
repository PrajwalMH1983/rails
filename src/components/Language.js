import React from 'react'
import Select from 'react-select'
import 'bootstrap/dist/css/bootstrap.min.css'
const actions = [
  { label: 'English', value: 1 },
  { label: 'Hindi', value: 2 },
  { label: 'Kannada', value: 3 },
  { label: 'Telugu', value: 4 },
  { label: 'Tamil', value: 5 },
]
const Language = () => {
  return (
    <div className='language'>
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

export default Language
