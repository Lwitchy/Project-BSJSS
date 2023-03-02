const PiranhaMessage = require('../../PiranhaMessage')
const LoginOkMessage = require('../../Messages/Server/LoginOkMessage')
const OwnHomeData = require('../Server/OwnHomeDataMessage')

class LoginMessage extends PiranhaMessage {
  constructor (bytes, client, player, db) {
    super(bytes)
    this.client = client
    this.player = player
    this.db = db
    this.id = 10101
    this.version = 0
  }

  async decode () {
    this.high_id = this.readInt()
    this.low_id = this.readInt()
    this.token = this.readString()

    this.major = this.readInt()
    this.minor = this.readInt()
    this.build = this.readInt()
  }

  async process () {
    if(this.player.state == 1){
      // Sends LoginOK
      new LoginOkMessage(this.client, this.player).send()
      new OwnHomeData(this.client, this.player).send()
    }
  }
}

module.exports = LoginMessage