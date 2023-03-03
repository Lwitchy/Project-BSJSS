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
    this.player.high_id = this.readInt()
    this.player.low_id = this.readInt()
    this.player.token = this.readString()

    this.major = this.readInt()
    this.minor = this.readInt()
    this.build = this.readInt()
  }

  async process () {
    if(this.player.state == 1){
      var pass = false
      if(this.player.low_id == 0){
        // Generate New ID
        var id = 1
        var token = "new_token"

        // Set Token and ID
        this.player.low_id = id
        this.player.token = token

        console.log(this.player.low_id)
        console.log(this.player.token)

        // Create new data in DB
        this.db.create_account(id, token)

        new LoginOkMessage(this.client, this.player).send()
        new OwnHomeData(this.client, this.player).send()
      }else{
        var player = this.player
        var data = null

        this.db.load_data(0, this.player.low_id, this.player.token).then(function(result){
          // Set variables from result
          data = JSON.parse(result)

        }).then((load_data) => {
          player.name = data['name']
          player.gems = data['gems']
          player.exp_points = data['exp_points']
          player.trophies = data['trophies']
          
          new LoginOkMessage(this.client, this.player).send()
          new OwnHomeData(this.client, this.player).send()
        })
      }

    }
  }
}

module.exports = LoginMessage