const PiranhaMessage = require('../../PiranhaMessage')
const LoginOkMessage = require('../../Messages/Server/LoginOkMessage')
const OwnHomeData = require('../Server/OwnHomeDataMessage')
const crypto = require('crypto')

class LoginMessage extends PiranhaMessage {
  constructor (bytes, client, player, db, serverSettings) {
    super(bytes)
    this.client = client
    this.player = player
    this.serverSettings = serverSettings
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
    function generate_token(){// Generating user token))
      const currentDateTime = new Date().valueOf().toString();
      const random = Math.random().toString();
      return crypto.createHash('sha1').update(currentDateTime + random).digest('hex');      
    }

    function generate_id(length){// Generating used id between 0-9 random numbers
      let randomNumberString = '';
      for (let i = 0; i < length; i++) {
        randomNumberString += Math.floor(Math.random() * 10);
      }
      return parseInt(randomNumberString);      
    }

    if(this.player.state == 1){// State check (ig I will not share with crypto so u can delete)
      if(this.player.low_id == 0){// If low_id == 0 means there is no id saved in client so new account
        // Generate New ID
        var id = generate_id(8)
        var token = generate_token()

        // Set Token and ID
        this.player.low_id = id
        this.player.token = token

        // Create new data in DB
        this.db.create_account(id, token)

        // And send loginOK, OwnHomeData
        new LoginOkMessage(this.client, this.player, id, token).send()
        new OwnHomeData(this.client, this.player,this.serverSettings).send()

      }else{// Load account with id come from client
        var player = this.player
        var data = null

        this.db.load_data(0, this.player.low_id, this.player.token).then(function(result){
          // Set variables from result
          data = JSON.parse(result)
        }).then(() => {// After finish load data set variables
          player.name = data['name']
          player.name_set = data['name_set']
          player.gems = data['gems']
          player.exp_points = data['exp_points']
          player.trophies = data['trophies']
          player.highest_trophies = data['highest_trophies']
          player.trophyroad_reward = data['trophyroad_reward']
          player.name_color = data['name_color']
          player.profile_icon = data['profile_icon']
          player.region = data['region']
          player.content_creator = data['content_creator']
          player.inbox = data['inbox']
          //player.offers = data['offers']
          player.unlocked_brawlers = data['unlocked_brawlers']
          player.unlocked_skins = data['unlocked_skins']
          player.unlocked_pins = data['unlocked_pins']
          player.unlocked_thumbnails = data['unlocked_thumbnails']
          player.unlocked_gadgets = data['unlocked_gadgets']
          player.selected_brawler = data['selected_brawler']
          player.selected_skins = data['selected_skins']
          player.selected_gadgets = data['selected_gadgets']
          player.brawlers_trophies = data['brawlers_trophies']
          player.brawlers_high_trophies = data['brawlers_high_trophies']
          player.brawlers_level = data['brawlers_level']
          player.brawlers_powerpoints = data['brawlers_powerpoints']
          
          // And send loginOK, OwnHomeData
          new LoginOkMessage(this.client, this.player).send()
          new OwnHomeData(this.client, this.player, this.serverSettings).send()
        })
      }

    }
  }
}

module.exports = LoginMessage