const PiranhaMessage = require('../../PiranhaMessage')
const LogicChangeAvatarNameCommand = require('../../Commands/Avatar/LogicChangeAvatarNameCommand')
const LogicGiveDeliveryItems = require('../../Commands/Home/Server/LogicGiveDeliveryItems')

class AvailableServerCommandMessage extends PiranhaMessage {
  constructor (client, player, command_id) {
    super()
    this.id = 24111
    this.client = client
    this.player = player
    this.command_id = command_id
    this.version = 0
  }

  async encode () {
    var commands = {
        201: LogicChangeAvatarNameCommand,
        203: LogicGiveDeliveryItems
    }

    if(this.command_id in commands){
        
        this.writeVInt(this.command_id)
        new commands[this.command_id]().encode(this)

        /*if(this.command_id == 201){
            new LogicChangeAvatarNameCommand().encode(this)
        }*/
    }
  }
}

module.exports = AvailableServerCommandMessage