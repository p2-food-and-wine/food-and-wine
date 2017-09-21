const winesAPI = new APIHandler("http://lcboapi.com/products?q=spain")

$(document).ready(() => {
  $('#search').on('click', (e) => {
    winesAPI.getFullList()
      .then( data => {
        data.result.forEach( wine => {
          console.log(wine);
          var $container = $('<div>').addClass("container").css({"border": "1px solid black"})
          $container.append( $("<p>").addClass('name').text(`Wine name: ${wine.name}`) )
          $container.append( $("<p>").addClass('type').text(wine.secondary_category) )
          $container.append( $("<p>").addClass('origin').text(wine.origin) )
          $container.append( $("<p>").addClass('varietal').text(wine.varietal) )
          $container.append( $("<p>").addClass('tasting').text(wine.tasting_note) )
          $container.append( $(`<img src=${wine.image_thumb_url}>`).addClass('image'))
          $('#wine-container').append($container)
        })
        // console.log(data.result[0].name)
        // console.log(data.result[0].primary_category === "Wine")
        // console.log(data.result[0].secondary_category)
        // console.log(data.result[0].origin)
        // console.log(data.result[0].serving_suggestion)
        // console.log(data.result[0].tasting_note)
        // console.log(data.result[0].varietal)
        // console.log(data.result[0].image_thumb_url)
      })
      .catch(err => console.log(err))
  })
})

function data(arr) {
  $('.wine-info').remove()
  arr.forEach((e) => {
    let chainfo = $('<div>').addClass('wine-info')
    let divOrigin = $('<div>').addClass('origin').text(data.result.origin)
    let divSuggestion = $('<div>').addClass('serving_suggestion').text(data.result.serving_suggestion)
    let divTasting = $('<div>').addClass('tasting_note').text(data.result.tasting_note)
    let divvarietal = $('<div>').addClass('varietal').text(data.result.varietal)
    $(chainfo).append(divName).append(divOrigin).append(divSuggestion).append(divTasting).append(divVarietal)
    $('.wine-container').append(chainfo)

  })
}
