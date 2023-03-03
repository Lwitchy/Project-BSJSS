const PiranhaMessage = require('../../PiranhaMessage')
const KeepAliveOKMessage = require('../Server/KeepAliveOKMessage')
//const LobbyInfoMessage = require('../Server/LobbyInfoMessage')

class KeepAliveMessage extends PiranhaMessage {
  constructor (bytes, client, player) {
    super(bytes)
    this.client = client
    this.player = player
    this.id = 10108
    this.version = 0
  }

  async decode () {

  }

  async process () {
    new KeepAliveOKMessage(this.client, this.player).send()
    //new LobbyInfoMessage(this.client, this.player).send()
  }
}

module.exports = KeepAliveMessage
