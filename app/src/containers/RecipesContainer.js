import React, {Component} from 'react'
import Recipes from '../components/Recipes/Recipes'

class RecipesContainer extends Component {
  state = {
    recipes: [
      'test'
    ]
  }

  // componentDidMount () => {
  //   put fetch data to state
  // }

  render() {
    return (
      <Recipes />
    )
  }
}

export default RecipesContainer
