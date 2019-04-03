const Morse = require('./translator')
const morseTranslator = new Morse()
const io = require('socket.io')
const server = io.listen(3000)

let clientsList = []

server.sockets.on('connection', function (socket) {
  console.log('\na client Connected!\n')
  clientsList.push(socket)
  console.log('currently have ' + clientsList.length + ' clients connected : \n')
  console.log('\n')
  socket.on('onLatinContent', (latinContent) => {
    let morseResponse = morseTranslator.encode(latinContent)
    socket.emit('morseResponse', morseResponse)
  })
  socket.on('onMorseContent', (morseContent) => {
    let latinResponse = morseTranslator.decode(morseContent)
    socket.emit('latinResponse', latinResponse)
  })
  socket.on('disconnect', (socket) => {
    console.log('A client just disconnect!')
    let i = clientsList.indexOf(socket)
    clientsList.splice(i, 1)
    console.log('currently have ' + clientsList.length + ' clients connected : \n')
  })
})
