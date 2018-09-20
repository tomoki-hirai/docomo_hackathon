var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/mrtry', function(req, res, next) {
  res.render('mrtry', { title: 'Express' });
});
router.get('/tag', function(req, res, next) {
  res.render('tag', { title: 'Express' });
});
router.get('/tabu', function(req, res, next) {
  res.render('tabu', { title: 'Express' });
});
router.get('/signup', function(req, res, next) {
  res.render('signup', { title: 'Express' });
});



module.exports = router;
