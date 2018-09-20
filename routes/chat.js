var express = require('express');
var router = express.Router();

const chat = require('../public/javascripts/chat-functions')
// socket
// var socket = require('./module/module_socket');

// router.post('/',function(req,res){
//   console.log(req.body)
//   res.send('')
//   socket.emit('chat message', 'music/'+String(req.body.name));
// })
// /* GET home page. */
router.get('/', function(req, res, next) {
  res.render('chat', { title: 'Express' });
  // クライアントからの接続を待つ
  // io.on('connection', (socket) => {
  //   socket=socket;
  //   console.log('a user connected');
  //   socket.on('chat message', (msg) => {
  //     console.log('message: ' + msg);
  //     io.emit('chat message', msg);
  //   });
  // });
});
router.get('/thread_list', function(req, res, next) {
  chat.thread_list(req,res)
});
router.get('/thread', function(req, res, next) {
  userinfo.thread(req,res)
});

module.exports = router;
