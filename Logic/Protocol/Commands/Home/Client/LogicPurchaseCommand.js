const AvailableServerCommand = require('../../../Messages/Server/AvailableServerCommandMessage')

class LogicPurchaseCommand{
    decode(self){
        self.readVInt()
        self.readVInt()
        self.readLogicLong()
        this.offer_index = self.readVInt()
        this.brawler = self.readDataReference()[1]
    }
    process(self){
        var offers = self.player.offers
        var offer_id = offers[this.offer_index]['ID']
        var offer_count = offers[this.offer_index]['Count']
        var offer_char = offers[this.offer_index]['DataReference'][1]
        var offer_itemID = offers[this.offer_index]['ItemID']
        var offer_currency = offers[this.offer_index]['Currency']
        var offer_cost = offers[this.offer_index]['Cost']


        self.player.delivery_items = {
            'Count': 1,
            'Type': 0,
            'Items': []
        }

        // Update Costs
        if(offer_currency == 0){
            self.player.gems - offer_cost
            self.db.update_data(0,self.player.low_id,self.player.token,'gems',self.player.gems)
        }else if(offer_currency == 1){
            self.player.coins - offer_cost
            //self.db.update_data(0, self.player.low_id,self.player.token,'')
        }else if(offer_currency == 3){
            // starpoints
        }
        /* Add your offers to here! */

        // Give Items
        if (offer_id == 1){
            var item = {'Amount': offer_count, 'DataRef': [0,0], 'Value': 7, 'SkinID': [0,0], 'PinID':[0,0], 'SPGID': [0,0]}
            self.player.delivery_items['Type'] = 100
            self.player.delivery_items['Items'].push(item)
            
            self.player.coins += offer_count
            self.db.update_data(0, self.player.low_id, self.player.token, 'coins', self.player.coins)
            new AvailableServerCommand(self.client, self.player, 203).send()            
        }

        if (offer_id == 4){
            var item = {'Amount': offer_count, 'DataRef': [0,0], 'Value': 9, 'SkinID': [29,offer_itemID], 'PinID': [0,0], 'SPGID': [0,0]}
            self.player.delivery_items['Type'] = 100
            self.player.delivery_items['Items'].push(item)

            self.player.unlocked_skins.push(offer_itemID)
            self.db.update_data(0,self.player.low_id, self.player.token, 'unlocked_skins', self.player.unlocked_skins)

            new AvailableServerCommand(self.client, self.player, 203).send()
        }

        if (offer_id == 16){
            var item = {'Amount': offer_count, 'DataRef': [0, 0], 'Value': 8, 'SkinID': [0,0], 'PinID': [0,0], 'SPGID': [0,0]}
            self.player.delivery_items['Type'] = 100
            self.player.delivery_items['Items'].push(item)

            self.player.gems += offer_count
            self.db.update_data(0,self.player.low_id, self.player.token, 'gems', self.player.gems)
            new AvailableServerCommand(self.client, self.player, 203).send()
        }



        
    }

    
    constructor() {
    }
}

module.exports = LogicPurchaseCommand