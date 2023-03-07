const PiranhaMessage = require('../../PiranhaMessage')
const LogicPurchaseCommand = require('../../Commands/Home/Client/LogicPurchaseCommand')

class EndClientTurnMessage extends PiranhaMessage{
    constructor(bytes, client, player, db){
        super(bytes)
        this.client = client
        this.player = player
        this.db = db
        this.id = 14102
        this.version = 0
    }
    async decode(){
        this.readVInt()
        this.readVInt()
        this.readVInt()
        this.readVInt()
        this.command_id = this.readVInt()
    }
    async process(){
        var commands = {
            519: LogicPurchaseCommand
        }

        if(this.command_id in commands){
            var command = new commands[this.command_id]
            command.decode(this)
            command.process(this, this.db)
        }
    }
}

module.exports = EndClientTurnMessage