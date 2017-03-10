const baseUrl = '/api'

export default {
  getAllRecipes () {
    return fetch(`${baseUrl}/recipes`, {
      accept: 'application/json'
    })
  .then(res => res.json())
  }
}
