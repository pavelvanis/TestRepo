const fs = require('fs');

function findPlayer(inputPlayer, callback) {

    fs.readFile('./database/players', (err, data) => {
        if (err) {
            console.log('Chyba pri hledani ID hrace')
            callback(err)
            return;
        }
        data = JSON.parse(data)
        var ID;
        data.forEach(function (item) {
            if (item.player === inputPlayer) {
                ID = item.id;
                console.log('player ID: '+ID);
                callback(null, ID)
                return
            }
        });
        if(ID === null) console.log('ID nebylo nalezeno v databazi ');
        callback(null, null)
    })
}

function findSeason() {
    fs.readFile('./database/season', (err, data) => {
        if (err) {
            console.log('Chyba pri hledani aktualni sezony')
            console.error(err)
            return
        }
        data = JSON.parse(data)
        var ID;
        data.forEach(function (item) {
            if (item.player === inputPlayer) {
                ID = item.id
                return ID
            }
        });

    })
}

module.exports = {
    findPlayer: findPlayer,
    findSeason: findSeason
}

