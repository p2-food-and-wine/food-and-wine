module.exports = {
  index: (req, res, next) => {
   const wines = $.ajax({
       url: 'http://lcboapi.com/products?q=red+wine',
       dataType: 'jsonp',
       headers: {
         Authorization: 'MDphMTIyMzQ1Ni05ZDJiLTExZTctOTQ1Ni0zMzc4ODZmMmJlNzQ6cDlGNHBOV1JmaVl0QUE3Rkc2dmFQYUpOTFZSdUR5Yml5S2ZB'
       }
     }).then(function(data) {
       data.result.forEach( wine => {
         console.log(wine.name)
       })
     });
     res.render('wines', wines)
  }
 }
