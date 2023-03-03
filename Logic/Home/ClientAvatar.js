

class ClientAvatar{
    encode(self){
        // Logic Client Avatar Start
        self.writeVInt(self.player.low_id) //ID?
        self.writeVInt(self.player.low_id) //ID?
    
        self.writeVInt(self.player.low_id) //ID?
        self.writeVInt(self.player.low_id) //ID?
    
        self.writeVInt(self.player.low_id) //ID?
        self.writeVInt(self.player.low_id) //ID?
    
        if (self.player.name === "Player" && !self.player.name_set) {
            self.writeString("Player")
            self.writeVInt(0)
        }else{
            self.writeString(self.player.name)
            self.writeVInt(1)
        }
    
        self.writeString()
        self.writeVInt(15) // Commodity Count
    
    
        // Resources Array
        self.writeVInt(1)
        self.writeDataReference(23, 0)
        self.writeVInt(1)
        // Resources Array End
    
        // Brawlers Trophies Array
        self.writeVInt(0)
        // Brawlers Trophies Array End
    
        // Brawlers Trophies for Rank Array        
        self.writeVInt(0)
        // Brawlers Trophies for Rank Array End
    
    
        // Unknown Brawlers Array
        self.writeVInt(0)  // Count
        // Unknown Brawlers Array End
    
        // Brawlers Power Points Array
        self.writeVInt(0)
        // Brawlers Power Points Array End
    
        // Brawlers Power Level Array        
        self.writeVInt(0)
        // Brawlers Power Level Array End
    
        // Array
        self.writeVInt(0)  // Count
        // Brawlers Star Powers Array End
    
        // "NEW" Brawlers Tag Array        
        self.writeVInt(0)
        // "NEW" Brawlers Tag array End
    
        // Array
        self.writeVInt(0)
    
        // Array
        self.writeVInt(0)
    
        // Array
        self.writeVInt(0)
    
        // Array
        self.writeVInt(0)
    
        // Array
        self.writeVInt(0)
    
        // Array
        self.writeVInt(0)
    
        // Array
        self.writeVInt(0)
    
        self.writeVInt(self.player.gems)  // Gems
        self.writeVInt(self.player.gems)  // Gems
        self.writeVInt(self.player.exp_points)  // EXP
        self.writeVInt(100)
        self.writeVInt(0)  // CumulativePurchasedDiamonds or Avatar User Level Tier | 10000 < Level Tier = 3 | 1000 < Level Tier = 2 | 0 < Level Tier = 1
        self.writeVInt(0)  // Battle Count
        self.writeVInt(0)  // WinCount
        self.writeVInt(0)  // LoseCount
        self.writeVInt(0)  // WinLooseStreak
        self.writeVInt(0)  // NpcWinCount
        self.writeVInt(0)  // NpcLoseCount
        self.writeVInt(2)  // TutorialState | shouldGoToFirstTutorialBattle = State == 0
        self.writeVInt(self.timestamp)  // TimeStamp
    }


    constructor(){
    }
}

module.exports = ClientAvatar