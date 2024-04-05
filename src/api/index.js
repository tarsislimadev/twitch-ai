const { ee } = require('./twitch.js')

ee.on('close', () => process.exit(1))
