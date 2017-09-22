const winesAPI = new APIHandler("http://lcboapi.com/products")

$(document).ready(() => {
  $('#search').on('click', (e) => {
   e.preventDefault();
    winesAPI.  getRandomList()
      .then( data => {
        data.result.forEach( wine => {
          var $container = $('<div>').addClass("container").css({"border": "1px solid black"})
          $container.append( $("<p>").addClass('name').text(`Wine name: ${wine.name}`) )
          $container.append( $("<p>").addClass('type').text(wine.secondary_category) )
          $container.append( $("<p>").addClass('origin').text(wine.origin) )
          $container.append( $("<p>").addClass('varietal').text(wine.varietal) )
          $container.append( $("<p>").addClass('tasting').text(wine.tasting_note) )
          $container.append( $(`<img src=${wine.image_thumb_url}>`).addClass('image'))
          $('#wine-container').append($container)
        })
      .catch(err => console.log(err))
  })
})})
