


$('#wines-search').on('click', (event) => {
  // Create an object with data to submit
  const characterInfo = {
    name: 'name',
    varietal: 'varietal',
    origin: 'origin'
  }
});


$.ajax({
  url: 'http://lcboapi.com/products',
  dataType: 'jsonp',
  headers: {
    Authorization: 'MDphMTIyMzQ1Ni05ZDJiLTExZTctOTQ1Ni0zMzc4ODZmMmJlNzQ6cDlGNHBOV1JmaVl0QUE3Rkc2dmFQYUpOTFZSdUR5Yml5S2ZB'
  }
}).then(function(data) {
  data.result.forEach( wine => {
  console.log(wine.name)
  })
});
