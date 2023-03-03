const PiranhaMessage = require('../../PiranhaMessage')
const ClientHome = require('../../../Home/ClientHome')
const ClientAvatar = require('../../../Home/ClientAvatar')


class OwnHomeData extends PiranhaMessage{
    constructor(client, player){
        super()
        this.id = 24101
        this.client = client
        this.player = player
        this.version = 1
        this.timestamp = Math.floor(Date.now() / 1000)
    }

    async encode(){    
        new ClientHome().encode(this)   
        new ClientAvatar().encode(this)
    }
}

module.exports = OwnHomeData