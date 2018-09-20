var express = require('express');
var router = express.Router();
var io = require('socket.io');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('chat', { title: 'Express' });
  // クライアントからの接続を待つ
  io.on('connection', (socket) => {
    aaa=socket;
    console.log('a user connected');
    socket.on('chat message', (msg) => {
      console.log('message: ' + msg);
      io.emit('chat message', msg);
    });
  });
});

module.exports = router;
