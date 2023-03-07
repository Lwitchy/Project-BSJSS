const sqlite3 = require('sqlite3')

class DatabaseManager{
    constructor(player){
        this.player = player
        // Connect to database
        console.log("Attempt to connect database!")
        this.db = new sqlite3.Database('../Database/Players.db', (err)=>{
            if(err){// Failed
                console.log('Failed to connect database!')
            }else{// Success
                console.log('Connected to database!')
                // Create Table
                this.create_table()
            }
        })

    }

    log_ping(){
        console.log("Log Ping!")
    }

    create_table(){// Create SQL Table
        const create_table_sqlite3 = 'CREATE TABLE IF NOT EXISTS main (id integer, token text, data json)'
        this.db.run(create_table_sqlite3)
        
    }

    create_account(low_id, token){
        // JSON Data
        const data = {
            'token': token,
            'id': low_id,
            'name': this.player.name,
            'name_set': this.player.name_set,
            'gems': this.player.gems,
            'coins': this.player.coins,
            'starpoints': this.player.starpoints,
            'exp_points': this.player.gems,
            'trophies': this.player.trophies,
            'highest_trophies': this.player.highest_trophies,
            'trophyroad_reward': this.player.trophyroad_reward,
            'name_color': this.player.name_color,
            'profile_icon': this.player.profile_icon,
            'region': this.player.region,
            'content_creator': this.player.content_creator,
            'inbox': this.player.inbox,
            'offers': this.player.offers,
            'unlocked_brawlers': this.player.unlocked_brawlers,
            'unlocked_skins': this.player.unlocked_skins,
            'unlocked_pins': this.player.unlocked_pins,
            'unlocked_thumbnails': this.player.unlocked_thumbnails,
            'unlocked_gadgets': this.player.unlocked_gadgets,
            'selected_brawler': this.player.selected_brawler,
            'selected_skins': this.player.selected_skins,
            'selected_gadgets': this.player.selected_gadgets,
            'brawlers_trophies': this.player.brawlers_trophies,
            'brawlers_high_trophies': this.player.brawlers_high_trophies,
            'brawlers_level': this.player.brawlers_level,
            'brawlers_powerpoints': this.player.brawlers_powerpoints
        }

        // Dump JSON data
        const dump_data = JSON.stringify(data)// dump
        this.db.run(`INSERT INTO main(id, token, data) VALUES(${low_id},"${token}",'${dump_data}')`, function(err){
            if(err){
                return console.log(err)
            }else{
                // omg success
            }
        })
    }

    load_data(high_id, low_id, token){// Load Data and return with it
        return new Promise((resolve, reject)=>{// Spend 30 min to find how to return? ahh
            this.db.get(`SELECT * from main where id=${low_id} AND token="${token}"`, (err,result)=>{
                if(err){// yes and I'm talking in code with myself
                    console.log(err)
                    reject()
                }else{// ig need to sleep
                    resolve(result['data'])
                }// I feel bad enough for today
            })    
        })
    }

    update_data(high_id, low_id, token, item, value){
        return new Promise((resolve, reject) => {this.db.get(`SELECT * from main where id=${low_id} AND token="${token}"`, (err,result)=>{
            if(err){
                console.log(err)// imagine
                reject()
            }else{
                // Loaded DATA
                const loaded_data = result['data']
                // JSON Parse
                const data = JSON.parse(loaded_data)
                // Update DATA
                data[`${item}`] = value
                // Dump Data
                const dump_data = JSON.stringify(data)// dump json data again damn
                this.db.run(`UPDATE main SET data='${dump_data}' WHERE id=${low_id} AND token="${token}"`)
                resolve()
            }
            })
        })
    }

}



module.exports = DatabaseManager