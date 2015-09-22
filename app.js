var express = require( 'express' );
var app = express();

app.get('/', function(request, response){
  console.log(response.statusCode)
  response.send('hello there')
})

app.listen(3000);
