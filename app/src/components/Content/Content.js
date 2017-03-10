import React from 'react'
import './Content.css'

const Content = props => {
  const {recipes} = props
  console.log(props.params)
  return (
    <div className='content-container'>
      <h1>
        HI from content
      </h1>
    </div>
  )
}

export default Content
