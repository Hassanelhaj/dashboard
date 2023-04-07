import React from 'react'
import { useSelector } from 'react-redux'

const Task = ({el}) => {
  return (
    <div>
      <div className='flex-row tasks-title'>

<p>{el.name}</p>
<p>{el.type}</p>
<img src={el.implies} className='dash-logo'/>
<p>{el.level}</p>

</div>
    </div>
  )
}

export default Task
