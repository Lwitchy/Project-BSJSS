const sqlite3 = require('sqlite3')

class DatabaseManager{
    constructor(player){
        this.player = player
        // Connect to database
        console.log("Attempt to connect database!")
        this.db = new sqlite3.Database('../Server/Database/Players.db', (err)=>{
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
            'gems': this.player.gems,
            'exp_points': this.player.gems,
            'trophies': this.player.trophies,
            'highest_trophies': this.player.highest_trophies,
            'trophyroad_reward': this.player.trophyroad_reward,
            'name_color': this.player.name_color,
            'profile_icon': this.player.profile_icon,
            'region': this.player.region,
            'content_creator': this.player.content_creator,
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
        return new Promise((resolve, reject)=>{// Spend 30 min to find how to return async function?
            this.db.get(`SELECT * from main where id=${low_id} AND token="${token}"`, (err,result)=>{
                if(err){// yes and I'm talking in code with myself am I right?
                    console.log(err)
                }else{// maybe no ig need to sleep
                    resolve(result['data'])
                }// I feel bad enough for today
            })    
        })// tomorrow now finish
    }

    update_data(high_id, low_id, token, item, value){
        this.db.get(`SELECT * from main where id=${low_id} AND token="${token}"`, (err,result)=>{
            if(err){
                console.log(err)// imagine
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
            }
        })

    }

}// finally it's enough I will add other function later

module.exports = DatabaseManager