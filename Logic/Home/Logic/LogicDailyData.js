class LogicDailyData{
    encode(self){
        // Logic Daily Data Start
        self.writeVInt(self.timestamp) //Timestamp
        self.writeVInt(self.timestamp) //Timestamp
    
        self.writeVInt(self.timestamp) //Timestamp
        self.writeVInt(self.timestamp) //Timestamp
    
        self.writeVInt(self.player.trophies)//Trophies
        self.writeVInt(self.player.highest_trophies)//HTRP
        self.writeVInt(self.player.highest_trophies)//HTRP
        self.writeVInt(self.player.trophyroad_reward)//TrophyRoadReward
        self.writeVInt(self.player.exp_points)//EXP
        self.writeDataReference(28, self.player.profile_icon)
        self.writeDataReference(43, self.player.name_color)
    
        //Played Game Modes Array
        self.writeVInt(0)
        //Played Game Modes Array End
    
        //Selected Skins Array
        self.writeVInt(0)
        //Selected Skins Array End
    
        //Selected Skins Random
        self.writeVInt(0)
        //self.writeDataReference(29, i)
        //Selected Skins Random End
    
        // Current Random Skin
        self.writeVInt(0)
        // Current Random Skin End
    
        // Selected Group Skin
        self.writeVInt(0)  // Skin Count
        //self.writeVInt(1)  // Group Index
        //self.writeDataReference(29, 18)  // SkinID
        // Selected Group Skin End
    
        // Unlocked Skins Array
        self.writeVInt(0)
        /* for (var x in self.player.unlocked_skins){
          self.writeDataReference(29, self.player.unlocked_skins[x])
        }*/
        // Unlocked Skins Array End
    
        // Unlocked Skin Purchase Option
        self.writeVInt(0)
        // Unlocked Skin Purchase Option End
    
        self.writeVInt(0)  
        
        self.writeVInt(0)// Leaderboard Region | 0 = Global, 1 = Asia
        self.writeVInt(self.player.highest_trophies)// Trophy Road Highest Trophies
        self.writeVInt(0)// Tokens Used In Battles
        self.writeVInt(1)// Control Mode
        self.writeBoolean(false)// Is Token Limit Reached
        self.writeVInt(0)// Tokens Doubler
        self.writeVInt(0)// Trophy Road Timer
        self.writeVInt(0)// Power Play Timer (maybe power league now?)
        self.writeVInt(0)// Brawl Pass Timer
    
        self.writeVInt(0) // Starpower Drop
        self.writeVInt(0) // Gadget Drop
    
        self.writeVInt(5) // Rarity Count
        self.writeVInt(1) // Rare Drop
        self.writeVInt(1) // Super Rare Drop
        self.writeVInt(1) // Epic Drop
        self.writeVInt(1) // Mythic Drop
        self.writeVInt(1) // Legendary Drop
    
    
        self.writeByte(4)  // Shop Token Doubler
        self.writeVInt(2)  // Token Doubler New Tag State
        self.writeVInt(2)  // Event Tickets New Tag State
        self.writeVInt(2)  // Coin Packs New Tag State
        self.writeVInt(0)  // Change Name Cost
        self.writeVInt(0)  // Timer For the Next Name Change
    
    
        self.writeVInt(0) // Shop array
    
        self.writeBoolean(false)
    
        self.writeVInt(200)  // Available tokens from battles
        self.writeVInt(-64)  // Timer for new tokens
    
        self.writeVInt(0)
    
        self.writeVInt(0)// Event Tickets lol
        self.writeVInt(0)// Tickets (still?)
    
        self.writeDataReference(16, 0)// Home Brawler
        self.writeString(self.player.region)
        self.writeString(self.player.content_creator)
    
        self.writeVInt(0)
    
        self.writeVInt(0)// CoolDown Entry Array
    
        // BrawlPass array 
        self.writeVInt(1)  // Season Count
    
        self.writeVInt(7) // Season
        self.writeVInt(0) // Tokens
        self.writeVInt(0) // isBrawlPass
        self.writeVInt(0)
        self.writeVInt(0)
        // BrawlPass array End
    
        self.writeVInt(0)
    
        // Quest Array
        self.writeBoolean(true) 
        self.writeVInt(0)
        // Quest Array End
    
        // Emojis and Thumbnails Array
        self.writeBoolean(true) 
        self.writeVInt(0)
        // Emojis and Thumbnails Array End
    
        // ig thumnails? like comes with power league pfps
        self.writeBoolean(false)
        self.writeInt(0)
        // end
        
        // Logic Daily Data End
    }
    
    constructor(){
    }
}

module.exports = LogicDailyData