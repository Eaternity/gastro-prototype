import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Content from '../Content/Content'
import RecipeLink from '../RecipeLink/RecipeLink'
import './Recipes.css'

const Recipes = props => {
  let recipes = props.recipes.length > 0 ? props.recipes.slice(0,20) : [
  ]

  const linkItems = recipes
    .filter(recipe => recipe !== null)
    .map(recipe => <RecipeLink key={recipe.id} recipe={recipe} />)

  return (
    <div className='recipes-container'>
      <Sidebar
        title='recipes'
        links={linkItems}
      />
      <Content />
    </div>
  )
}

export default Recipes
