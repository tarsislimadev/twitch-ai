const { ee } = require('./twitch.js')

ee.on('open', () => console.log('open', Date.now()))

ee.on('close', () => console.log('close', Date.now()))
