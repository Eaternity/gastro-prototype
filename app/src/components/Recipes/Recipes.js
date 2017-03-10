import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Content from '../Content/Content'
import RecipeLink from '../RecipeLink/RecipeLink'
import './Recipes.css'

const Recipes = props => {
  let {recipes, params} = props
  const {id} = params
  recipes = recipes.length > 0 ? recipes.filter(recipe => recipe !== null) : []

  const currentRecipe = recipes ? recipes.filter(r => r.id === id)[0] : ''

  const linkItems = recipes
    .filter(recipe => recipe !== null)
    .map(recipe => {
      const name = recipe.titles ? recipe.titles
        .filter(title => title.language === 'de')
        .map(title => title.value)
        : ''
      return <RecipeLink name={name} key={recipe.id} recipe={recipe} />
    })

  return (
    <div className='recipes-container'>
      <Sidebar
        {...props}
        title='recipes'
        links={linkItems}
      />
      <Content
        currentRecipe={currentRecipe} />
    </div>
  )
}
export default Recipes
