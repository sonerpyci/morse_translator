const io = require('socket.io')
const server = io.listen(3000)

server.sockets.on('connection', function (socket) {
  console.log('a new connection')
  socket.on('button', function () {
    console.log('received a message from the client.')
    socket.emit('return', 'axaxaxaxaxaxa')
  })
})
