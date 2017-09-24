const winesAPI = new wineAPIHandler("http://lcboapi.com/products")
const recipeAPI = new RecipeAPIHandler()

$(document).ready(() => {
  $('#search').on('click', (e) => {
    e.preventDefault()
    var ingredient = $(e.target).data('principal-ingredient')

    recipeAPI.getEquivalences(ingredient).then(result => {
      console.log(`8=======D result ${result}`);
      console.log(result);
      result.forEach( equivalence =>{
        console.log(`8=======D equivalence ${equivalence}`);
        winesAPI.getRandomList(equivalence.wineTypeOriginal).then( wines =>{
          console.log(`8=======D wines ${wines}`);
          for(var i=0 ; i<3 ; i++){
            var wine = wines.result[i]
            var $container = $('<div>').addClass("container").css({
              "border": "1px solid black"
            })
            $container.append($("<p>").addClass('name').text(`Wine name: ${wine.name}`))
            $container.append($("<p>").addClass('type').text(wine.secondary_category))
            $container.append($("<p>").addClass('origin').text(wine.origin))
            $container.append($("<p>").addClass('varietal').text(wine.varietal))
            $container.append($("<p>").addClass('tasting').text(wine.tasting_note))
            $container.append($(`<img src=${wine.image_thumb_url}>`).addClass('image'))
            $('#maridaje-container').append($container)
          }
        })
      })
    })
  })
})
