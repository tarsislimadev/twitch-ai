const WebSocket = require('ws')

const EventEmitter = require('events')

const config = require('./config.js')

const client = new WebSocket(config.url)

const ee = new EventEmitter()

ee.on('request', (data) => [console.log('request', Date.now(), data), client.send(JSON.stringify(data))])

setInterval(() => ee.emit('request', { 'type': 'PING' }), 30 * 1000)

ee.on('open', () => console.log('open', Date.now()))

client.on('open', () => ee.emit('open'))

ee.on('response', (data) => console.log('response', Date.now(), data.toString()))

client.on('message', (data) => ee.emit('response', data))

ee.on('error', (err) => console.log('error', Date.now(), err))

client.on('error', (err) => ee.emit('error', err))

ee.on('close', () => console.log('close', Date.now()))

client.on('close', () => ee.emit('close'))

module.exports = { ee }
