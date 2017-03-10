import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Content from '../Content/Content'
import RecipeLink from '../RecipeLink/RecipeLink'
import './Recipes.css'

const Recipes = props => {
	let {recipes} = props;
    if(recipes===undefined){
        recipes = [{name:"Karotte", url:"/"},{name:"Karotte", url:"/"},{name:"Karotte", url:"/"},{name:"Karotte", url:"/"},{name:"Karotte", url:"/"},{name:"Karotte", url:"/"},{name:"Karotte", url:"/"}]
    }
    let linkItems = recipes.map(function(recipe){return [<RecipeLink recipe={recipes[0]}/>]})
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
