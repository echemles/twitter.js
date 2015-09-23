var _ = require('underscore');
var data = [ { name: 'Charlotte Dash',
    text: 'Fullstack Academy is sexy! The instructors are just so sexy. #fullstacklove #codedreams' },
  { name: 'Nimit Dash',
    text: 'Fullstack Academy is sexy! The instructors are just so amazing. #fullstacklove #codedreams' },
  { name: 'Sophia Tilde',
    text: 'Fullstack Academy is sexy! The instructors are just so breathtaking. #fullstacklove #codedreams' },
  { name: 'Sophia Dash',
    text: 'Fullstack Academy is amazing! The instructors are just so awesome. #fullstacklove #codedreams' },
  { name: 'Jacob Tilde',
    text: 'Fullstack Academy is mindblowing! The instructors are just so amazing. #fullstacklove #codedreams' },
  { name: 'Sophia Ashby',
    text: 'Fullstack Academy is cool! The instructors are just so wonderful. #fullstacklove #codedreams' },
  { name: 'Ethan Alley',
    text: 'Fullstack Academy is sexy! The instructors are just so amazing. #fullstacklove #codedreams' },
  { name: 'Dave Gatsby',
    text: 'Fullstack Academy is amazing! The instructors are just so cool. #fullstacklove #codedreams' },
  { name: 'Nimit Cookie',
    text: 'Fullstack Academy is sweet! The instructors are just so cool. #fullstacklove #codedreams' },
  { name: 'lester',
    text: 'Fullstack Academy is cool! The instructors are just so breathtaking. #fullstacklove #codedreams' } ];

var add = function (name, text) {
  data.push({ name: name, text: text });
};

var list = function () {
  return _.clone(data); //copied by reference. "shallow-copied clone"
};

var find = function (properties) {
  return _.where(data, properties);
};

module.exports = { add: add, list: list, find: find, data: data}; //--> twitterBank.add(name,text)















// var randArrayEl = function(arr) {
//   return arr[Math.floor(Math.random() * arr.length)];
// };

// var getFakeName = function() {
//   var fakeFirsts = ['Nimit', 'Dave', 'Will', 'Charlotte', 'Jacob','Ethan','Sophia','Emma','Madison'];
//   var fakeLasts = ["Alley", 'Stacky', 'Fullstackerson', 'Nerd', 'Ashby', 'Gatsby', 'Hazelnut', 'Cookie', 'Tilde', 'Dash'];
//   return randArrayEl(fakeFirsts) + " " + randArrayEl(fakeLasts);
// };

// var getFakeTweet = function() {
//   var awesome_adj = ['awesome','breathtaking','amazing','sexy','sweet','cool','wonderful','mindblowing'];
//   return "Fullstack Academy is " + randArrayEl(awesome_adj) + "! The instructors are just so " + randArrayEl(awesome_adj) + ". #fullstacklove #codedreams";
// };

// for(var i=0; i<10; i++) {
//   module.exports.add( getFakeName(), getFakeTweet() );
// }

// console.log(data)