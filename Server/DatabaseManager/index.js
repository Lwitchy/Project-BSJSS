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

    create_table(){// Create SQL Table
        const create_table_sqlite3 = 'CREATE TABLE IF NOT EXISTS main (id integer, token text, data json)'
        this.db.run(create_table_sqlite3)
    }

    create_account(){
        // JSON Data
        const data = {
            'token': this.player.token,
            'high_id': this.player.high_id,
            'low_id': this.player.low_id,
            'name': this.player.name,
            'name_color': this.player.name_color,
            'profile_icon': this.player.profile_icon,
            'region': this.player.region
        }

        // Dump JSON data
        const dump_data = JSON.stringify(data)
        this.db.run(`INSERT INTO main(id, token, data) VALUES(${this.player.low_id},"${this.player.token}",'${dump_data}')`)
    }

    load_data(high_id, low_id, token){// Load Data and return with it
        return new Promise((resolve, reject)=>{
            this.db.get(`SELECT * from main where id=${low_id} AND token="${token}"`, (err,result)=>{
                if(err){
                    console.log(err)
                }else{
                    resolve(result['data'])
                }
            })    
        })
    }

    update_data(high_id, low_id, token, item, value){
        this.db.get(`SELECT * from main where id=${low_id} AND token="${token}"`, (err,result)=>{
            if(err){
                console.log(err)
            }else{
                // Loaded DATA
                const loaded_data = result['data']
                // JSON Parse
                const data = JSON.parse(loaded_data)
                // Update DATA
                data[`${item}`] = value
                // Dump Data
                const dump_data = JSON.stringify(data)
                this.db.run(`UPDATE main SET data='${dump_data}' WHERE id=${low_id} AND token="${token}"`)
            }
        })

    }

}

module.exports = DatabaseManager