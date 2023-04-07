import React from 'react'

const Imploy = ({data}) => {
    
  return (
    
    <div className='flex-row tasks-title'>
      <h4>{data.name}</h4>
      <h4>{data.Title}</h4>
      <h4>{data.salary}</h4>

    </div>
  )
}

export default Imploy
