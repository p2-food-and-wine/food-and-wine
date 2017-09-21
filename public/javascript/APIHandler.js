class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
    this.API_KEY = 'MDphMTIyMzQ1Ni05ZDJiLTExZTctOTQ1Ni0zMzc4ODZmMmJlNzQ6cDlGNHBOV1JmaVl0QUE3Rkc2dmFQYUpOTFZSdUR5Yml5S2ZB'
  }

  getFullList() {
    return $.ajax({
      method: 'GET',
      url: this.BASE_URL,
      dataType: 'jsonp',
      headers: {
        Authorization: this.API_KEY
      }
    })
  }
}
