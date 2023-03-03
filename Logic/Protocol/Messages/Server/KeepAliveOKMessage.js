const PiranhaMessage = require('../../PiranhaMessage')

class KeepAliveOKMessage extends PiranhaMessage {
  constructor (client) {
    super()
    this.id = 20108
    this.client = client
    this.version = 0
  }

  async encode () {

  }
}

module.exports = KeepAliveOKMessage
