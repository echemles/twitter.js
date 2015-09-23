var router = require('express').Router();
var tweetBank = require('../tweetBank.js');

var path = require('path');

router.get('/', function (req, res) {
  var tweets = tweetBank.list();
  //console.log("PATH", req.path);
  res.render( 'index', { title: 'Twitter.js', tweets: tweets } );

});

// router.get('/users/:name', function (req, res) {
//   var tweets = tweetBank.list();
//   var thisUser = req.params.name;
//   //console.log("PATH", req.path);
//   res.render( 'index', { user: thisUser, title: 'Twitter.js', tweets: tweets } );
// });

router.get('/users/:name', function(req, res) {
  var tweets = tweetBank.list();
  var name = req.params.name;
  var list = tweetBank.find(tweetBank.data, {name: name});
  console.log(list);
  res.render( 'index', { title: 'Twitter.js - Posts by ' + name, tweets: list } );
});

router.get('/stylesheets/style.css', function (req, res) {
  res.sendFile(path.join(__dirname,'../public/stylesheets/style.css'), {}, function (err) {
    if (err) {
      console.log(err);
      res.status(err.status).end();
    }
    else {
      //console.log('Sent:', fileName);
    }
   });

});


module.exports = router;
