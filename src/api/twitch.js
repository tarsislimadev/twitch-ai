const WebSocket = require('ws')

const EventEmitter = require('events')

const config = require('./config.js')

const client = new WebSocket(config.url)

const ee = new EventEmitter()

client.on('open', () => ee.emit('open'))

client.on('message', (data) => ee.emit('message', data))

client.on('error', (err) => ee.emit('error', err))

client.on('close', () => ee.emit('close'))

module.exports = { ee }
