var express = require( 'express' );
var app = express();
var chalk = require('chalk');
var morgan = require('morgan');

app.use(morgan());

app.get('/', function(request, response){
  console.log(response.statusCode)
  response.send('hello there!')
})

app.use('/test', function(request, response){
  // console.log(request.method, request.route.path, response.statusCode);
  response.send('hey will!!');
})



app.listen(3000);
