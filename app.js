var url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=b228a6ca3c764188a00d05fdf4cf0a55';


fetch(url)
.then(response => response.json())
.then(data => {
    console.log(data)
})
.cath(err=>console.log())