var express = require('express');
var router = express.Router();
// socket
var socket = require('./module/module_socket');

router.post('/',function(req,res){
  console.log(req.body)
  res.send('')
  socket.emit('chat message', 'music/'+String(req.body.name));
})
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('chat', { title: 'Express' });
  // クライアントからの接続を待つ
  io.on('connection', (socket) => {
    socket=socket;
    console.log('a user connected');
    socket.on('chat message', (msg) => {
      console.log('message: ' + msg);
      io.emit('chat message', msg);
    });
  });
});

module.exports = router;
