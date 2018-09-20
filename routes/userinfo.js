var express = require('express');
var router = express.Router();

const userinfo = require('../public/javascripts/userinfo-functions')

/* GET home page. */
router.get('/', function(req, res, next) {
  userinfo.userinfo(req,res)
  // if(req.query.function == 'addstock'){
  //   console.log('addstock')
  //   res.send(stock.addstock(req));
  // }
  // else if(req.query.function == 'checkstock'){
  //   stock.checkstock(req,res);
  // }else if(req.query.function == 'sell'){
  //   res.send(stock.sell(req));
  // }else if(req.query.function == 'checksales'){
  //   stock.checksales(req,res);
  // }else if(req.query.function == 'deleteall'){
  //   res.send(stock.deleteall());
  // }else{
  //   res.send('EROOR')
  // }
});
router.get('/detail', function(req, res, next) {
  userinfo.userinfo_detail(req,res)
});
router.get('/overview', function(req, res, next) {
  userinfo.overview(req,res)
});

module.exports = router;