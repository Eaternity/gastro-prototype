import React from 'react'
import {Link} from 'react-router'
import './RecipeLink.css'

const RecipeLink = props => {
	const {recipe} = props;
  return (
    <Link to={`/recipes/${recipe.id}`} className='recipe-link'>
      {recipe.name}
    </Link>
  )
}

export default RecipeLink
