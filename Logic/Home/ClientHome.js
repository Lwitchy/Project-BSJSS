const LogicDailyData = require('./Logic/LogicDailyData')
const LogicConfData = require('./Logic/LogicConfData')

class ClientHome{
    encode(self){
        new LogicDailyData().encode(self)
        new LogicConfData().encode(self)

        // Client Home Start
        self.writeInt(0)  // PlayerID
        self.writeInt(self.player.low_id)  // PlayerID
    
        self.writeVInt(0) // Notification Factory
    
        self.writeVInt(-64)  // VideoAdStarted
        self.writeBoolean(false)
        self.writeVInt(0)  // Gatcha Drop
        self.writeVInt(0)  // FriendlyStarPower
        // Client Home End

    }
}

module.exports = ClientHome