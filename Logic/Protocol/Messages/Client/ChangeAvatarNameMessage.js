const PiranhaMessage = require('../../PiranhaMessage')
const AvailableServerCommandMessage = require('../Server/AvailableServerCommandMessage')

class ChangeAvatarNameMessage extends PiranhaMessage{
    constructor(bytes, client, player, db){
        super(bytes)
        this.client = client
        this.player = player
        this.db = db
        this.id = 10212
    }
    async decode(){
        this.username = this.readString()
        this.state = this.readVInt()
    }
    async process(){
        if(this.username){
            if(this.username.length > 3 && this.username.length < 20){
                this.player.name = this.username
                await this.db.update_data(0, this.player.low_id, this.player.token, 'name', this.player.name)
                await this.db.update_data(0, this.player.low_id, this.player.token, 'name_set', true)
                new AvailableServerCommandMessage(this.client, this.player, 201).send()
            }
        }
    }
}

module.exports = ChangeAvatarNameMessage