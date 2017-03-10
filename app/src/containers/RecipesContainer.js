import React, {Component} from 'react'
import Recipes from '../components/Recipes/Recipes'
import api from '../api/api'

class RecipesContainer extends Component {
  state = {
    recipes: []
  }

  componentDidMount () {
    api.getAllRecipes()
      .then(recipes => {
        this.setState({
          recipes
        })
      })
  }

  render() {
    const {recipes} = this.state;
    return (
      <Recipes {...this.props} recipes={recipes}/>
    )
  }
}

export default RecipesContainer
