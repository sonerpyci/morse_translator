const io = require('socket.io')
const server = io.listen(3000)

server.sockets.on('connection', function (socket) {
  socket.on('onLatinContent', function () {
    console.log('latin content received')
    socket.emit('morseResponse', '----..--.-.--.-')
  })
  socket.on('onMorseContent', function () {
    console.log('morse content received')
    socket.emit('latinResponse', 'axaxaxaxaxaxa')
  })
})
