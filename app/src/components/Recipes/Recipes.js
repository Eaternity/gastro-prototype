import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Content from '../Content/Content'
import RecipeLink from '../RecipeLink/RecipeLink'
import './Recipes.css'

const Recipes = props => {
  let {recipes} = props
  recipes = recipes || [
    {name: 'Karotte1', id: '1'},
    {name: 'Karotte2', id: '2'},
    {name: 'Karotte3', id: '3'},
    {name: 'Karotte4', id: '4'},
    {name: 'Karotte5', id: '5'},
    {name: 'Karotte6', id: '6'},
    {name: 'Karotte7', id: '7'}
  ]

  const linkItems = recipes.map(recipe => <RecipeLink recipe={recipe} />)

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
