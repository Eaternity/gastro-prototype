const express = require('express')
const app = express()
const jsonfile = require('jsonfile')
const path = require('path')

// set indentation for jsonfile
jsonfile.spaces = 2

const dataDir = path.resolve(__dirname, './data')
const recipes = jsonfile.readFileSync(`${dataDir}/recipes/recipes.all.json`)

// serve static files in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('app/build'))
}

// api endpoints
app.get('/api/recipes', (req, res) => {
  res.json(recipes)
})

// app.get('/api/recipes/:id', (req, res) => {
//   const id = req.params.id
//   res.json(recipes.filter(recipe => {
//     return recipe.id === id
//   }))
// })

module.exports = app
