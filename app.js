
var express = require('express');
var app = express();
var chalk = require('chalk');
var morgan = require('morgan');
var swig = require('swig');
var swigtest = require('./swigtest.js')
var routes = require('./routes/');
app.use('/', routes);



app.use(morgan());

app.engine('html', swig.renderFile);

app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.set('view cache', false);
swig.setDefaults({ cache: false });



app.listen(3000);



//======================================================================
//OLD ROUTES
// app.get('/', function (req, res) {
//   res.render('index', {title: 'Hall of Fame', people: swigtest.people});
// });
// app.use('/test', function(request, response){
//   // console.log(request.method, request.route.path, response.statusCode);
//   response.send('hey will!!');
// })

// app.get('/', function(request, response){
//   console.log(response.statusCode)
//   response.send('hello there!')
// })
