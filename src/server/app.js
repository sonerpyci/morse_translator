const Morse = require('./translator')
const morseTranslator = new Morse()
const io = require('socket.io')

const portNumber = process.env.SERVER_PORT || 3000
const server = io.listen(portNumber)

console.log('Socket server now listening on port: ', portNumber)

let clientsList = []
console.log(process.env.PORT)
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
