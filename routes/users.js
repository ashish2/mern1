
/* GET users listing. */
/*
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  console.log("in users.js sending users.json");
  res.sendFile('../users.json');
});
*/

usersFunc = function(req, res, next) {
  //res.send('respond with a resource');
  console.log("in users.js sending users.json");
  res.sendFile('/opt/lampp/htdocs/www/langs/JS/venv/meteorapps/venv/all_apps/quicksell_in/app/users.json');
};


module.exports = usersFunc;
