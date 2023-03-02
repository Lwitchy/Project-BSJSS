const PiranhaMessage = require('../../PiranhaMessage')


class LoginOkMessage extends PiranhaMessage{
    constructor(client, player){
        super()
        this.id = 20104
        this.client = client
        this.player = player
        this.version = 0
    }

    async encode(){
        this.writeLong(0, 1)
        this.writeLong(0, 1)

        this.writeString(this.player.token)// Tokenki
        this.writeString()// Facebook ID
        this.writeString()// Gamecenter ID (ios moment)

        // Versions
        this.writeInt(29)// Major
        this.writeInt(98)// Minor
        this.writeInt(1)// Build

        this.writeString("prod")// Environment

        this.writeInt(0)// Sessions Count
        this.writeInt(0)// Play Time Seconds
        this.writeInt(0)// Days Since Started Playing
    
        this.writeString()
        this.writeString()
        this.writeString()

        this.writeInt()

        this.writeString()

        this.writeString("AZ")// Region
        this.writeString()

        this.writeInt(1)

        this.writeString()
        this.writeString()
        this.writeString()

        this.writeVInt(0)

        this.writeString()

        this.writeVInt(1)
    
    }
}

module.exports = LoginOkMessage