import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, browserHistory} from 'react-router'
import RecipesContainer from './containers/RecipesContainer'
import PlanContainer from './containers/PlanContainer'
import './index.css'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={RecipesContainer} />
    <Route path='recipes/:id' component={RecipesContainer} />
    <Route path='plan' component={PlanContainer} />
  </Router>,
  document.getElementById('root')
)
