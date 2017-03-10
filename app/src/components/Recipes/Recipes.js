import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Content from '../Content/Content'
import RecipeLink from '../RecipeLink/RecipeLink'
import './Recipes.css'

const Recipes = props => {
  const {recipes} = props

  const linkItems = recipes
    .filter(recipe => recipe !== null)
    .map(recipe => {
      name = recipe.titles ? recipe.titles
        .filter(title => title.language === 'de')
        .map(title => title.value)
        : ''
      return <RecipeLink name = {name} key={recipe.id} recipe={recipe} />
    })

  return (
    <div className='recipes-container'>
      <Sidebar
        {...props}
        title='recipes'
        links={linkItems}
      />
      <Content
        {...props}
        recipes={recipes} />
    </div>
  )
}
export default Recipes