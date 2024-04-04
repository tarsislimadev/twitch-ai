const WebSocket = require('ws')

const client = new WebSocket(require('./config.js').url)

client.on('open', function open() {
  console.log('Conected')
})

client.on('message', function incoming(data) {
  console.log(data)
})

client.on('error', function () {
  console.log('Error')
})

client.on('close', function close() {
  console.log('Connection Closed')
})
