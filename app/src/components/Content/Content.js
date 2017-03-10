import React from 'react'
import RecipeHeader from '../RecipeHeader/RecipeHeader'
import './Content.css'

const Content = props => {
  const {currentRecipe} = props
  const award = currentRecipe ? currentRecipe['eaternity-award'] : ''
  const co2Value = currentRecipe ? currentRecipe['co2-value'] : ''
  const name = currentRecipe ? currentRecipe.titles.map(t => t.value) : ''

  return (
    <div className='content-container'>
      <RecipeHeader
        award={award}
        name={name}
        co2Value={co2Value}
       />
    </div>
  )
}

export default Content
