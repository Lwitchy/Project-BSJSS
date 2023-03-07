// Project BSJSS
const net = require('net')
const Player = require('../../Logic/Instances/Player.js')
const Server = require('../../Logic/Instances/Server')
const MessageFactory = require('../../Logic/Protocol/MessageFactory.js')
const DB = require('../DatabaseManager/index')

const serverSettings = new Server()
const playerClass = new Player()
const server = new net.Server()
const Messages = new MessageFactory()
const dbmanager = new DB(playerClass)

serverSettings.loadCsvData()
playerClass.update_brawler_data(serverSettings)


server.on('connection', async (client) => {
    client.setNoDelay(true)
    client.log = function (text) {
      return console.log(`[${this.remoteAddress.split(':').slice(-1)}] >> ${text}`)
    }
  
    client.log('[SERVER]: New Connection!')
    const packets = Messages.getPackets();
    client.player = playerClass
    client.db = dbmanager
    client.serverSettings = serverSettings
  
    client.on('data', async (packet) => {
      const message = {
        id: packet.readUInt16BE(0),
        len: packet.readUIntBE(2, 3),
        version: packet.readUInt16BE(5),
        payload: packet.slice(7, this.len),
        client,
      }
      if (packets.indexOf(String(message.id)) !== -1) {
        try {
          const packet = new (Messages.handle(message.id))(message.payload, client, client.player, client.db, client.serverSettings)
  
          client.log(`[CLIENT][<<]: New Packet! ${message.id} (${packet.constructor.name})`)
          await packet.decode()
          await packet.process()
        } catch (e) {
          console.log(e)
        }
      } else {
        client.log(`[CLIENT][<<]: Packet not handled! ${message.id}!`)
      }
    })
  
    client.on('end', async () => {
      return client.log('[SERVER]: Client disconnected.')
    })
  
    client.on('error', async error => {
      try {
        console.log(error)
        client.destroy()
      } catch (e) { }
    })
  })
  
  server.once('listening', () => console.log(`Server Listening ${serverSettings.server_port} PORT`))
  server.listen(serverSettings.server_port)


  
  process.on("uncaughtException", e => console.log(e));
  process.on("unhandledRejection", e => console.log(e));
  