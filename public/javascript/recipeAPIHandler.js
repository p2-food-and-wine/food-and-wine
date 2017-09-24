class RecipeAPIHandler{
  constructor(){}
  getEquivalences(ingredient){
    return $.get(`/equivalences?principalIngredient=${ingredient}`)
  }
}
