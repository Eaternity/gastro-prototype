import React from 'react'
import {Link} from 'react-router'
import './RecipeLink.css'

const RecipeLink = props => {
  const {recipe} = props
  const {titles} = recipe
  const name = titles ? titles
    .filter(title => title.language === 'de')
    .map(title => title.value)
    : ''

  return (
    <Link to={`/recipes/${recipe.id}`} className='recipe-link'>
      {name}
    </Link>
  )
}
export default RecipeLink
