

class LogicGiveDeliveryItems{
    encode(self){
        self.writeVInt(0)
        self.writeVInt(self.player.delivery_items['Count'])

        for(var i = 0; i < self.player.delivery_items.Count; i++){
            var type = self.player.delivery_items['Type']
            self.writeVInt(type)

            if(type !== 100){
                if(type == 10){
                    // Brawl Box
                }
                if(type == 11){
                    // Mega Box
                }
                if(type == 12){
                    // Big Box
                }
            }else{
                var rewards = self.player.delivery_items['Items']
            }

            self.writeVInt(rewards.length)
            for(var x in rewards){
                self.writeVInt(rewards[x]['Amount'])
                self.writeVInt(rewards[x]['DataRef'][0], rewards[x]['DataRef'][1])
                self.writeVInt(rewards[x]['Value'])
                self.writeDataReference(rewards[x]['SkinID'][0], rewards[x]['SkinID'][1])
                self.writeDataReference(rewards[x]['PinID'][0], rewards[x]['PinID'][1])
                self.writeDataReference(rewards[x]['SPGID'][0], rewards[x]['SPGID'][1])
                self.writeVInt(0)
            }
    }
    
    self.writeBoolean(false)

    self.writeVInt(0)// milstoneid
    self.writeVInt(0)// milstone track
    self.writeVInt(0)
    self.writeVInt(0)
    self.writeVInt(0)// season end ril
    self.writeVInt(0)

    self.writeVInt(0)
    self.writeVInt(0)    
    }

    constructor() {
    }
}
module.exports = LogicGiveDeliveryItems