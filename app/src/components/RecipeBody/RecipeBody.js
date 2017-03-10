import React from 'react'
import {Table, Tr, Td} from 'reactable'
import './RecipeBody.css'

const RecipeHeader = props => {
  const {ingredients, preparation} = props

  const splitPreparation = preparation.split('\n\n')

  const betterPreparation = splitPreparation.map(prep => {
    return (
      <div
        className='preparation'
        key={prep}>
        <p>{prep}</p>
      </div>
    )
  })

  const renderTableRows = () => {
    return (
      ingredients.map(ingredient => {
        return (
          <Tr key={ingredient.name} >
            <Td column='Name' data={ingredient.name} />
            <Td column='Amount' data={ingredient.amount} />
          </Tr>
        )
      })
    )
  }

  return (
    <div className='recipe-body-container'>
      <h3>Ingredients</h3>
      <Table
        className='table'
        columns={['Name', 'Amount']}
        itemsPerPage={20}
        pageButtonLimit={3}
        filterable={['Name', 'Amount']}
        sortable={['Name', 'Amount']}
        hideFilterInput >
        {renderTableRows()}
      </Table>
      <h3>Preparation</h3>
      {betterPreparation}
    </div>
  )
}
export default RecipeHeader
