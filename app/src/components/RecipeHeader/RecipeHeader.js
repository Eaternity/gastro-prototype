import React from 'react'
import foodPorn from './food-porn.png'
import awardLogo from './award-logo.png'
import './RecipeHeader.css'

const RecipeHeader = props => {
  const {name, award, co2Value} = props
  return (
    <div className='recipe-header-container'>
      <div className='recipe-summary-container'>
        <h3>{name}</h3>
        {award && <img className='logo' src={awardLogo} alt='award-logo' />}
        <br />
        {`CO2-value: ${co2Value}`}
      </div>
      <img src={foodPorn} alt='foodPorn' />
    </div>
  )
}
export default RecipeHeader
