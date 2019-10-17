var express = require('express');
var router = express.Router();


var loggedin = function(req,res,next){
  
  
  if(req.isAuthenticated()){   // see this section its very imp for 
            next()
  }
     else{  res.redirect('/login')}
  }

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login',function(req, res, next) {
  res.render('login');
});

router.get('/signup', function(req, res, next) {
  res.render('signup');
});

router.get('/profile', loggedin, function(req, res, next) {
  res.send(req.session)
});

router.get('/logout', function(req,res){
  req.logOut(); // be carefull here
  res.send('jjjjj')
})
module.exports = router;
