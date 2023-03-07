const fs = require('fs');
const csv = require('csv');

class CSVReader{
    readCsv(filename, isEncodeUTF = false) {
      return new Promise((resolve, reject) => {
        let rowData = [];
        let lineCount = 0;
        let stream;
    
        if (isEncodeUTF) {
          stream = fs.createReadStream(filename, { encoding: 'utf-8' });
        } else {
          stream = fs.createReadStream(filename);
        }
    
        stream.pipe(csv.parse())
          .on('data', (row) => {
            if (lineCount === 0 || lineCount === 1) {
              lineCount++;
            } else {
              rowData.push(row);
              lineCount++;
            }
          })
          .on('end', () => {
            resolve(rowData);
          })
          .on('error', (err) => {
            reject(err);
          });
      });    
    }

    loadCardID(brawlerId) {
      return new Promise((resolve, reject) => {
        let charsData, cardsData;
        this.readCsv(`../../Logic/Assets/Files/csv_logic/characters.csv`, false)
          .then((data) => {
            charsData = data;
            return this.readCsv(`../../Logic/Assets/Files/csv_logic/cards.csv`, false)
          })
          .then((data) => {
            cardsData = data;
            for (let i = 0; i < charsData.length; i++) {
              if (i == brawlerId) {
                const name = charsData[i][0];
                for (let j = 0; j < cardsData.length; j++) {
                  if (cardsData[j][7].toLowerCase() == '0' && cardsData[j][3] == name) {
                    resolve(j);
                    return;
                  }
                }
              }
            }
          })
          .catch((err) => {
            reject(err);
          });
      });
    }

    loadAllBrawlers(){
      return new Promise((resolve, reject) => {
        let brawlers = []
        this.readCsv('../../Logic/Assets/Files/csv_logic/characters.csv')
        .then((data)=>{
          var charsData = data;
          for(let i=0; i < charsData.length; i++){
            if(charsData[i][23] == 'Hero' && charsData[i][2].toLowerCase() !== 'true' && charsData[i][1].toLowerCase() !== 'true'){
              //console.log(charsData[i][0])
              brawlers.push(i)
            }
          }
          resolve(brawlers)
          return;
        })
      })
    }
  }


module.exports = CSVReader