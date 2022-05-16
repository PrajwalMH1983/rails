import React from 'react'
import Select from 'react-select'

const Country = () => {
  const actions = [
    { label: 'India', value: 1 },
    { label: 'United States of America', value: 2 },
    { label: 'Australia', value: 3 },
    { label: 'Canada', value: 4 },
    { label: 'France', value: 5 },
  ]
  return (
    <div>
      <div className='country'>
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
    </div>
  )
}

export default Country
