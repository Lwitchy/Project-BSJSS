const PiranhaMessage = require('../../PiranhaMessage')


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
            
        }

        console.log("Command ID:", this.command_id)
    }
}

module.exports = EndClientTurnMessage