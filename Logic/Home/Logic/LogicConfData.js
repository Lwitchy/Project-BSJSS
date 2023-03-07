class LogicConfData{
    encode(self){
        //Logic Conf Data start
        self.writeVInt(0)
    
        self.writeVInt(22)  // Count
        self.writeVInt(1)  // Gem Grab
        self.writeVInt(2)  // Showdown
        self.writeVInt(3)  // Daily Events
        self.writeVInt(4)  // Team Events
        self.writeVInt(5)  // Duo Showdown
        self.writeVInt(6)  // Team Events 2
        self.writeVInt(7)  // Special Events
        self.writeVInt(8)  // Solo Events
        self.writeVInt(9)  // Power Play
        self.writeVInt(10)  // Seasonal Events
        self.writeVInt(11)  // Seasonal Events 2
        self.writeVInt(12)  // Candidates of The Day
        self.writeVInt(13)  // Winner of The Day
        self.writeVInt(14)  // Solo Mode Power League
        self.writeVInt(15)  // Team Mode Power League
        self.writeVInt(16)  // Club league
        self.writeVInt(17)  // Club league
        self.writeVInt(20)  // Championship Challenge (Stage 1)
        self.writeVInt(21)  // Championship Challenge (Stage 2)
        self.writeVInt(22)  // Championship Challenge (Stage 3)
        self.writeVInt(23)  // Championship Challenge (Stage 4)
        self.writeVInt(24)  // Championship Challenge (Stage 5)
        // Event Slots IDs Array End
    
        // Events Count
        self.writeVInt(1) // Events
    
        self.writeVInt(1)
        self.writeVInt(1)  // EventType
        self.writeVInt(0)  // EventsBeginCountdown
        self.writeVInt(0)  // Timer
        self.writeVInt(0)  // tokens reward for new event
        self.writeDataReference(15, 7)  // MapID
        self.writeVInt(-64)  // GameModeVariation
        self.writeVInt(2)  // State
        self.writeString()
        self.writeVInt(0)
        self.writeVInt(0)
        self.writeVInt(0)
        self.writeVInt(0)  // Modifiers
        self.writeVInt(0)
        self.writeVInt(0)
        self.writeBoolean(false)  // Map Maker Map Structure Array
        self.writeVInt(0)
        self.writeBoolean(false)  // Power League Data Array
        self.writeVInt(0)
        self.writeVInt(0)
        self.writeVInt(0)  // Chronos Text Entry
        self.writeVInt(-64)
        self.writeBoolean(false)
    
        self.writeVInt(0)  // Coming Up Events Count
    
        self.writeVInt(8)  // Brawler Upgrade Cost
        self.writeVInt(25)
        self.writeVInt(40)
        self.writeVInt(80)
        self.writeVInt(145)
        self.writeVInt(295)
        self.writeVInt(485)
        self.writeVInt(805)
        self.writeVInt(1255)
    
        self.writeVInt(4)  // Shop Coins Price
        self.writeVInt(20)
        self.writeVInt(50)
        self.writeVInt(140)
        self.writeVInt(280)
    
        self.writeVInt(4)  // Shop Coins Amount
        self.writeVInt(150)
        self.writeVInt(400)
        self.writeVInt(1200)
        self.writeVInt(2600)
    
        self.writeBoolean(true)  // Show Offers Packs
    
        //Locked for chronos array
        self.writeVInt(0)// Count
        //Locked for chronos array End
    
        self.writeVInt(1)  // IntValueEntry
        self.writeLongInt(1, 41000000 + 28) // ThemeID

    
        self.writeVInt(0)  // Timed Int Value Entry
    
        self.writeVInt(0)  // Custom Event
    
        self.writeVInt(0)
    
        self.writeVInt(0)
        self.writeVInt(0)
        // Logic Conf Data End
    }


}

module.exports = LogicConfData