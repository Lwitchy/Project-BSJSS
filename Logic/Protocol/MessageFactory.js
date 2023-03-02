const fs = require('fs')


class MessageFactory{
    constructor () {
        this.packets = {}
    
        fs.readdir('./Protocol/Messages/Client', (err, files) => {
          if (err)console.log(err)
          files.forEach(e => {
            try{
              const Packet = require(`./Messages/Client/${e.replace('.js', '')}`)
              const packetClass = new Packet()
    
              this.packets[packetClass.id] = Packet
            }catch(err){
              console.log(`Error Occured when try to load package "${e.replace(".js", "")}" packet!`)
              console.log(err)
            }
          })
        })
      }
    handle (id) {
        return this.packets[id]
      };
    
      getPackets () {
        return Object.keys(this.packets)
      }
    }
    
module.exports = MessageFactory