import React from 'react'
import {Link} from 'react-router'
import './RecipeLink.css'

const RecipeLink = props => {
	const {recipe} = props||{};
	console.log(recipe)
	//TODO: this has errors with promises I don't understand
	let nameObject = recipe.titles.filter((title)=>{title.language==="de"})[0] || {}
	

	name= recipe.titles[0].value ||"no title"
  return (
    <Link to={`/recipes/${recipe.id}`} className='recipe-link'>
      {name}
    </Link>
  )
}
export default RecipeLink
