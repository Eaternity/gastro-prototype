import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Content from '../Content/Content'
import RecipeLink from '../RecipeLink/RecipeLink'
import './Recipes.css'

const Recipes = props => {
  let {recipes, params} = props
  const {id} = params
  recipes = recipes.filter(recipe => recipe !== null)
  const currentRecipe = id ? recipes.filter(r => r.id === id)[0] : ''

  const linkItems = recipes.map(recipe => {
    const {titles} = recipe
    const name = titles ? titles
        .filter(title => title.language === 'de')
        .map(title => title.value)[0]
        : ''

    return <RecipeLink name={name} key={recipe.id} recipe={recipe} />
  })

  return (
    <div className='recipes-container'>
      <Sidebar
        {...props}
        title='Recipes'
        links={linkItems}
      />
      <Content
        {...props}
        currentRecipe={currentRecipe} />
    </div>
  )
}
export default Recipes
