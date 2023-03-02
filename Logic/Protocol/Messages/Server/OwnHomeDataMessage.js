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
    }

    async encode(){        
        this.writeVInt(0) //Timestamp
        this.writeVInt(0) //Timestamp
    
        this.writeVInt(0) //Timestamp
        this.writeVInt(0) //Timestamp
    
        this.writeVInt(0)//Trophies
        this.writeVInt(0)//HTRP
        this.writeVInt(0)//HTRP
        this.writeVInt(1)//TrophyRoadReward
        this.writeVInt(0)//EXP
        this.writeDataReference(28, this.player.profile_icon)
        this.writeDataReference(43, this.player.name_color)
    
        //Played Game Modes Array
        this.writeVInt(0)
        //Played Game Modes Array End
    
        //Selected Skins Array
        this.writeVInt(0)
        //Selected Skins Array End
    
        //Selected Skins Random
        this.writeVInt(0)
        //this.writeDataReference(29, i)
        //Selected Skins Random End
    
        // Current Random Skin
        this.writeVInt(0)
        // Current Random Skin End
    
        // Selected Group Skin
        this.writeVInt(0)  // Skin Count
        //this.writeVInt(1)  // Group Index
        //this.writeDataReference(29, 18)  // SkinID
        // Selected Group Skin End
    
        // Unlocked Skins Array
        this.writeVInt(0)
        /* for (var x in this.player.unlocked_skins){
          this.writeDataReference(29, this.player.unlocked_skins[x])
        }*/
        // Unlocked Skins Array End
    
        // Unlocked Skin Purchase Option
        this.writeVInt(0)
        // Unlocked Skin Purchase Option End
    
        this.writeVInt(0)  
        
        this.writeVInt(0)// Leaderboard Region | 0 = Global, 1 = Asia
        this.writeVInt(0)// Trophy Road Highest Trophies
        this.writeVInt(0)// Tokens Used In Battles
        this.writeVInt(1)// Control Mode
        this.writeBoolean(false)// Is Token Limit Reached
        this.writeVInt(0)  // Tokens Doubler
        this.writeVInt(0)// Trophy Road Timer
        this.writeVInt(0)// Power Play Timer (maybe power league now?)
        this.writeVInt(0)// Brawl Pass Timer
    
        this.writeVInt(0) // Starpower Drop
        this.writeVInt(0) // Gadget Drop
    
        this.writeVInt(5) // Rarity Count
        this.writeVInt(1) // Rare Drop
        this.writeVInt(1) // Super Rare Drop
        this.writeVInt(1) // Epic Drop
        this.writeVInt(1) // Mythic Drop
        this.writeVInt(1) // Legendary Drop
    
    
        this.writeByte(4)  // Shop Token Doubler
        this.writeVInt(2)  // Token Doubler New Tag State
        this.writeVInt(2)  // Event Tickets New Tag State
        this.writeVInt(2)  // Coin Packs New Tag State
        this.writeVInt(0)  // Change Name Cost
        this.writeVInt(0)  // Timer For the Next Name Change
    
    
        this.writeVInt(0) // Shop array
    
        this.writeBoolean(false)
    
        this.writeVInt(200)  // Available tokens from battles
        this.writeVInt(-64)  // Timer for new tokens
    
        this.writeVInt(0)
    
        this.writeVInt(0)// Event Tickets lol
        this.writeVInt(0)// Tickets (still?)
    
        this.writeDataReference(16, 0)// Home Brawler
        this.writeString(this.player.region)
        this.writeString("Lwitchyyy")
    
        this.writeVInt(0)
    
        this.writeVInt(0)// CoolDown Entry Array
    
        // BrawlPass array 
        this.writeVInt(1)  // Season Count
    
        this.writeVInt(7) // Season
        this.writeVInt(0) // Tokens
        this.writeVInt(0) // isBrawlPass
        this.writeVInt(0)
        this.writeVInt(0)
        // BrawlPass array End
    
        this.writeVInt(0)
    
        // Quest Array
        this.writeBoolean(true) 
        this.writeVInt(0)
        // Quest Array End
    
        // Emojis and Thumbnails Array
        this.writeBoolean(true) 
        this.writeVInt(0)
        // Emojis and Thumbnails Array End
    
        this.writeBoolean(false)
        this.writeInt(0)
    
        //LogicDailyData end
    
        //LogicConfData start
        this.writeVInt(0)
    
        this.writeVInt(22)  // Count
        this.writeVInt(1)  // Gem Grab
        this.writeVInt(2)  // Showdown
        this.writeVInt(3)  // Daily Events
        this.writeVInt(4)  // Team Events
        this.writeVInt(5)  // Duo Showdown
        this.writeVInt(6)  // Team Events 2
        this.writeVInt(7)  // Special Events
        this.writeVInt(8)  // Solo Events
        this.writeVInt(9)  // Power Play
        this.writeVInt(10)  // Seasonal Events
        this.writeVInt(11)  // Seasonal Events 2
        this.writeVInt(12)  // Candidates of The Day
        this.writeVInt(13)  // Winner of The Day
        this.writeVInt(14)  // Solo Mode Power League
        this.writeVInt(15)  // Team Mode Power League
        this.writeVInt(16)  // Club league
        this.writeVInt(17)  // Club league
        this.writeVInt(20)  // Championship Challenge (Stage 1)
        this.writeVInt(21)  // Championship Challenge (Stage 2)
        this.writeVInt(22)  // Championship Challenge (Stage 3)
        this.writeVInt(23)  // Championship Challenge (Stage 4)
        this.writeVInt(24)  // Championship Challenge (Stage 5)
        // Event Slots IDs Array End
    
        // Events Count
        this.writeVInt(1) // Events
    
        this.writeVInt(1)
        this.writeVInt(1)  // EventType
        this.writeVInt(0)  // EventsBeginCountdown
        this.writeVInt(0)  // Timer
        this.writeVInt(0)  // tokens reward for new event
        this.writeDataReference(15, 13)  // MapID
        this.writeVInt(-64)  // GameModeVariation
        this.writeVInt(2)  // State
        this.writeString()
        this.writeVInt(0)
        this.writeVInt(0)
        this.writeVInt(0)
        this.writeVInt(0)  // Modifiers
        this.writeVInt(0)
        this.writeVInt(0)
        this.writeBoolean(false)  // Map Maker Map Structure Array
        this.writeVInt(0)
        this.writeBoolean(false)  // Power League Data Array
        this.writeVInt(0)
        this.writeVInt(0)
        this.writeVInt(0)  // Chronos Text Entry
        this.writeVInt(-64)
        this.writeBoolean(false)
    
    
        this.writeVInt(0)  // Coming Up Events Count
    
        this.writeVInt(8)  // Brawler Upgrade Cost
        this.writeVInt(25)
        this.writeVInt(40)
        this.writeVInt(80)
        this.writeVInt(145)
        this.writeVInt(295)
        this.writeVInt(485)
        this.writeVInt(805)
        this.writeVInt(1255)
    
        this.writeVInt(4)  // Shop Coins Price
        this.writeVInt(20)
        this.writeVInt(50)
        this.writeVInt(140)
        this.writeVInt(280)
    
        this.writeVInt(4)  // Shop Coins Amount
        this.writeVInt(150)
        this.writeVInt(400)
        this.writeVInt(1200)
        this.writeVInt(2600)
    
        this.writeBoolean(false)  // Show Offers Packs
    
        //Locked for chronos array
        this.writeVInt(0)// Count
        //Locked for chronos array End
    
        this.writeVInt(13)  // IntValueEntry
    
        this.writeLongInt(1, 41000000 + 28) // ThemeID

        this.writeLongInt(61, 36270) // SupportDisabled State | if 36218 < state its true

        this.writeLongInt(29, 10) // Skin Group Active For Campaign | 10 enable | 5 Bad Randoms 7 Hallowen 10 Brawlywood
        this.writeLongInt(50, 0) // Coming up quests placeholder
        this.writeLongInt(14, 0) // Double Token Event
        this.writeLongInt(31, 0) // Gold Rush Event
    
        this.writeLongInt(79, 149999)
        this.writeLongInt(80, 160000)
        this.writeLongInt(28, 4)
        this.writeLongInt(74, 1)
        this.writeLongInt(78, 1)
        this.writeLongInt(17, 4)
        this.writeLongInt(10046, 1)
    
        this.writeVInt(0)  // Timed Int Value Entry
    
        this.writeVInt(0)  // Custom Event
    
        this.writeVInt(0)
    
        this.writeVInt(0)
    
        this.writeVInt(0)    
    
        this.writeInt(0)  // PlayerID
        this.writeInt(0)  // PlayerID
    
        this.writeVInt(0) // Notification Factory
    
        this.writeVInt(-64)  // VideoAdStarted
        this.writeBoolean(false)
        this.writeVInt(0)  // Gatcha Drop
        this.writeVInt(0)  // FriendlyStarPower
    
        // Logic Client Avatar Start
    
        this.writeVInt(this.player.low_id) //ID?
        this.writeVInt(this.player.low_id) //ID?
    
        this.writeVInt(this.player.low_id) //ID?
        this.writeVInt(this.player.low_id) //ID?
    
        this.writeVInt(this.player.low_id) //ID?
        this.writeVInt(this.player.low_id) //ID?
    
        this.writeString(this.player.name)
        this.writeVInt(1)
    
        this.writeString()
    
        this.writeVInt(15) // Commodity Count
    
    
        // Resources Array
        this.writeVInt(1)
        this.writeDataReference(23, 0)
        this.writeVInt(1)
        // Resources Array End
    
        // Brawlers Trophies Array
        this.writeVInt(0)
        // Brawlers Trophies Array End
    
        // Brawlers Trophies for Rank Array        
        this.writeVInt(0)
        // Brawlers Trophies for Rank Array End
    
    
        // Unknown Brawlers Array
        this.writeVInt(0)  // Count
        // Unknown Brawlers Array End
    
        // Brawlers Power Points Array
        this.writeVInt(0)
        // Brawlers Power Points Array End
    
        // Brawlers Power Level Array        
        this.writeVInt(0)
        // Brawlers Power Level Array End
    
        // Array
        this.writeVInt(0)  // Count
        // Brawlers Star Powers Array End
    
        // "NEW" Brawlers Tag Array        
        this.writeVInt(0)
        // "NEW" Brawlers Tag array End
    
        // Array
        this.writeVInt(0)
    
        // Array
        this.writeVInt(0)
    
        // Array
        this.writeVInt(0)
    
        // Array
        this.writeVInt(0)
    
        // Array
        this.writeVInt(0)
    
        // Array
        this.writeVInt(0)
    
        // Array
        this.writeVInt(0)
    
        this.writeVInt(0)  // Gems
        this.writeVInt(0)  // Gems
        this.writeVInt(0)  // EXP
        this.writeVInt(100)
        this.writeVInt(0)  // CumulativePurchasedDiamonds or Avatar User Level Tier | 10000 < Level Tier = 3 | 1000 < Level Tier = 2 | 0 < Level Tier = 1
        this.writeVInt(0)  // Battle Count
        this.writeVInt(0)  // WinCount
        this.writeVInt(0)  // LoseCount
        this.writeVInt(0)  // WinLooseStreak
        this.writeVInt(0)  // NpcWinCount
        this.writeVInt(0)  // NpcLoseCount
        this.writeVInt(2)  // TutorialState | shouldGoToFirstTutorialBattle = State == 0
        this.writeVInt(0)  // TimeStamp
    }
}

module.exports = OwnHomeData