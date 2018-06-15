
/* GET users listing. */
/*
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  console.log("in users.js sending users.json");
  res.sendFile('../users.json');
});
*/


usersFunc = function(req, res, next) {
  let options = {root: config.root};
  res.sendFile('/users.json', options);
};


module.exports = usersFunc;
