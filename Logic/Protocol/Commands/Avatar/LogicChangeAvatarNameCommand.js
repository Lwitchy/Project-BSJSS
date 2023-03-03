
class LogicChangeAvatarNameCommand{
    encode(self){
        self.writeString(self.player.name)// Name
        self.writeVInt(0)// Name Cost
    }



    constructor(){
    }
}

module.exports = LogicChangeAvatarNameCommand