import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Content from '../Content/Content'
import './Recipes.css'

const Recipes = props => {
  return (
    <div className='recipes-container'>
      <Sidebar />
      <Content />
    </div>
  )
}

export default Recipes
