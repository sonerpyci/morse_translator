const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const app = express()
/* const http = require('http').Server(app)
const io = require('socket.io')(http) */

app.use(bodyParser.json())
app.use(morgan('combined')) // istek geldiğinde, gönderen tarafın bilgilerini console'a yazar.

app.get('/status', (req, res) => {
  res.send({
    message: 'It Seems Working Fine!'
  })
})

app.post('/morseToLatin', (req, res) => {
  res.send({
    message: 'morseToLatin.'
  })
})

app.post('/latinToMorse', (req, res) => {
  res.send({
    message: 'latinToMorse.'
  })
})

app.listen(process.env.PORT || 3000)
