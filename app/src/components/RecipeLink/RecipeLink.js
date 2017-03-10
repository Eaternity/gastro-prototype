import React from 'react'
import {Link} from 'react-router'
import './RecipeLink.css'

const RecipeLink = props => {
	const {recipe} = props;
	const name = recipe.titles.filter((title)=>{title.language==="de"})[0].value
  return (
    <Link to={`/recipes/${recipe.id}`} className='recipe-link'>
      {name}
    </Link>
  )
}
export default RecipeLink
