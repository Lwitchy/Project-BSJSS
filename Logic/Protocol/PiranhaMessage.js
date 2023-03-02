const ByteStream = require('../../Titan/ByteStream')


class PiranhaMessage extends ByteStream{
    constructor(bytes){
        super(bytes)
        this.id = 0
        this.client = null
        this.version = 0
        this.player = null
    }
    encode(){

    };

    decode(){

    };

    process(){

    }

}

module.exports = PiranhaMessage