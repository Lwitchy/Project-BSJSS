class LogicShopData{

    encode(self){
        var offers = self.player.offers
        var offer_length = offers.length

        // SHOP
        self.writeVInt(offer_length)

        // Rewards
        for(var i in offers){
            self.writeVInt(1)

            self.writeVInt(offers[i]['ID'])// ID
            self.writeVInt(offers[i]['Count'])// Count
            self.writeDataReference(offers[i]['DataReference'][0],offers[i]['DataReference'][1])
            self.writeVInt(offers[i]['ItemID'])// ItemID

            self.writeVInt(offers[i]['Currency'])// Currency (0-Gems,1-Gold,3-StarPoints)
            self.writeVInt(offers[i]['Cost'])// Cost
            self.writeVInt(200)// Time
            self.writeVInt(offers[i]['State'])// State (0-New with Animations, 1-New, 2-Nothing)
            self.writeVInt(0)
            self.writeBoolean(false)// Who Buyed
            self.writeVInt(0)// Offer Index
            self.writeVInt(0)
            self.writeBoolean(offers[i]['isDaily'])// isDaily?
            self.writeVInt(offers[i]['oldCost'])// OldPrice
            self.writeInt(0)
            self.writeString(offers[i]['offerText'])// Offer Text
            self.writeBoolean(false)
            self.writeString(offers[i]['offerBGR'])// Offer Background
            self.writeVInt(0)
            self.writeBoolean(offers[i]['isProcess'])// isProcess
            self.writeVInt(offers[i]['ExtraType'])// ExtraType
            self.writeVInt(offers[i]['Extra'])// Extra
            self.writeString()
            self.writeBoolean(offers[i]['isOneTimePurchase'])// isOneTimePurchase
            // SHOP
        }
    }
}

module.exports = LogicShopData