const PiranhaMessage = require('../../PiranhaMessage')
const OwnHomeDataMessage = require('../Server/OwnHomeDataMessage')

class GoHomeFromOfflinePractiseMessage extends PiranhaMessage {
  constructor (bytes, client, player) {
    super(bytes)
    this.client = client
    this.player = player
    this.id = 14109
    this.version = 0
  }

  async decode () {

  }

  async process () {
    new OwnHomeDataMessage(this.client, this.player).send()
  }
}

module.exports = GoHomeFromOfflinePractiseMessage
