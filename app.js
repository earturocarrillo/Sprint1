var url = 'http://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=b228a6ca3c764188a00d05fdf4cf0a55';
var req = await new Request(url);
fetch(req)
    .then(function(response) {
        console.log(response.json());
    })
