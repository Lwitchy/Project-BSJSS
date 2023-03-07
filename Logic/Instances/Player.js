class Player {
    state = 1

    low_id = 0
    high_id = 0
    token = "None"

    // Player Information
    name = "Player"
    name_set = false
    gems = 0
    coins = 0
    starpoints = 0
    exp_points = 0
    trophies = 0
    highest_trophies = 0
    trophyroad_reward = 1
    name_color = 0
    profile_icon = 0
    region = "AZ"
    content_creator = "BSJSS"
    inbox = []
    offers = [
      {
          "ID": 1,
          "Count": 10,
          "DataReference": [16,0],
          "ItemID": 0,
          "Currency": 0,
          "Cost": 0,
          "State": 2,
          "isDaily": false,
          "oldCost": 0,
          "offerText": "",
          "offerBGR": "",
          "isProcess": false,
          "ExtraType": 0,
          "Extra": 0,
          "isOneTimePurchase": false
      }
  ]


    // Unlocked Data
    unlocked_brawlers = [0,8]
    unlocked_skins = []
    unlocked_pins = []
    unlocked_thumbnails = []
    unlocked_gadgets = []

    // Selected Data
    selected_brawler = 0
    selected_skins = {}
    selected_gadgets = {}
    
    // Brawlers Data
    brawlers_trophies = {}
    brawlers_high_trophies = {}
    brawlers_level = {}
    brawlers_powerpoints = {}

  
    delivery_items = {}


    update_brawler_data(){
        for (let x of this.unlocked_brawlers) {
            this.brawlers_trophies[x.toString()] = 0;
          }
          for (let x of this.unlocked_brawlers) {
            this.brawlers_high_trophies[x.toString()] = 0;
          }
          for (let x of this.unlocked_brawlers) {
            this.brawlers_level[x.toString()] = 0;
          }     
          for (let x of this.unlocked_brawlers) {
            this.brawlers_powerpoints[x.toString()] = 0;
          }

    }

    constructor(){
    }
}
module.exports = Player