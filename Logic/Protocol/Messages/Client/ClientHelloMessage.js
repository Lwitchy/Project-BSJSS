const PiranhaMessage = require('../../PiranhaMessage')
const ServerHelloMessage = require('../Server/ServerHelloMessage')


class ClientHelloMessage extends PiranhaMessage{
    constructor(bytes, client, player, db){
        super(bytes)
        this.client = client
        this.player = player
        this.db = db
        this.id = 10100
        this.version = 0
    }

    async decode(){
        this.protocol = this.readInt()
        this.key_version = this.readInt()
        this.major_version = this.readInt()
        this.minor_version = this.readInt()
        this.build_version = this.readInt()
        this.content_hash = this.readString()
        this.device_type = this.readInt()
        this.app_store = this.readInt()
    }

    async process(){
        
        new ServerHelloMessage(this.client).send()

    }
}

module.exports = ClientHelloMessage