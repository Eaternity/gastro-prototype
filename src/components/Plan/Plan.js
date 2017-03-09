import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Content from '../Content/Content'
import './Plan.css'

const Plan = props => {
  return (
    <div className='plan-container'>
      <Sidebar />
      <Content />
    </div>
  )
}

export default Plan
