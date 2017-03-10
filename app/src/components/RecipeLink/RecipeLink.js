import React from 'react'
import {Link} from 'react-router'
import './RecipeLink.css'

const RecipeLink = props => {
  const {recipe, name} = props
  const {titles} = recipe


  return (
    <Link to={`/recipes/${recipe.id}`} className='recipe-link'>
      {name}
    </Link>
  )
}
export default RecipeLink
