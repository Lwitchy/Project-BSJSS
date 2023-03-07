const CSVReader = require('../../Logic/Assets/Csvreader')

class Server{
    server_port = 9339

    // CSV Data
    all_brawlers = []
    all_brawlers_card_id = {}
    all_skins = []

    loadCsvData(){
        const csvreader = new CSVReader()
        csvreader.loadAllBrawlers()
        .then((data)=>{
            this.all_brawlers = data;
            console.log("[INFO]:",this.all_brawlers.length, "Brawler Loaded.");
        })
        .then(()=>{
            const promises = [];
            for (var x = 0; x < this.all_brawlers.length; x++) {
              (function(w) {
                const promise = csvreader.loadCardID(this.all_brawlers[x]).then((index) => {
                  this.all_brawlers_card_id[w] = index
                });
                promises.push(promise);
              }).call(this, x)
            }
            return Promise.all(promises);
        }).then(()=>{
          //finished
          console.log("[INFO]: Card IDs Loaded.")
        })
    }    

    constructor(){
    }
}

module.exports = Server