import React, {Component} from 'react'
import Plan from '../components/Plan/Plan'

class PlanContainer extends Component {
  state = {
    recipes: [
      'test'
    ]
  }

  render() {
    return (
      <Plan />
    )
  }
}

export default PlanContainer
