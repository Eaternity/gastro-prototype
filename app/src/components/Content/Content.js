import React from 'react'
import RecipeHeader from '../RecipeHeader/RecipeHeader'
import RecipeBody from '../RecipeBody/RecipeBody'
import './Content.css'

const Content = props => {
  const {currentRecipe} = props
  const award = currentRecipe ? currentRecipe['eaternity-award'] : ''
  const co2Value = currentRecipe ? currentRecipe['co2-value'] : ''
  const name = currentRecipe ? currentRecipe.titles.map(t => t.value) : ''
  const preparation = currentRecipe ? currentRecipe.instruction : ''
  const ingredients = currentRecipe ? currentRecipe.ingredients
    .map(ingredient => {
      const {names, amount} = ingredient
      const name = names
        .filter(obj => obj.language === 'de')
        .map(obj => {
          return obj.value
        })[0]
      return {
        name,
        amount
      }
    })
    : []

  return (
    <div className='content-container'>
      <RecipeHeader
        award={award}
        name={name}
        co2Value={co2Value}
       />
      <RecipeBody
        ingredients={ingredients}
        preparation={preparation}
        />
    </div>
  )
}

export default Content
