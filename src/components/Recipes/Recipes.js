import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Content from '../Content/Content'
import RecipeLink from '../RecipeLink/RecipeLink'
import './Recipes.css'

const Recipes = props => {
	let {recipes} = props;
    if(recipes===undefined){

        //demo fallback --remove later
        recipes = [{name:"Karotte1", id:"1"},{name:"Karotte2", id:"2"},{name:"Karotte3", id:"3"},{name:"Karotte4", id:"4"},{name:"Karotte5", id:"5"},{name:"Karotte6", id:"6"},{name:"Karotte7", id:"7"}]
    }
    let recipeLinks = recipes.map(function(recipe){return [<RecipeLink recipe={recipe}/>]})
    let linkItems = [<linkSeparator title = "recipes"/>].concat(recipeLinks)
  return (
    <div className='recipes-container'>
      <Sidebar
        title='recipes'
        links ={linkItems}
      />
      <Content />
    </div>
  )
}

export default Recipes
