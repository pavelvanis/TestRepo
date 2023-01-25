
const express = require('express')
const app = express()
require('dotenv').config()

const bodyParser = require('body-parser')
app.use(bodyParser.json())

/* const { fork } = require('child-process');
fork('databse/take_data.js');
 */

//const myModules = require('./my_modules')


// nastaví metodu post, která přijde z /submit 
app.post('/submit', (req, res) => {
    const player = req.body.player
    console.log('Player: ' + player)

    /*     var season_playerID = (async function (player) {
            const result = await myModules.getData(player)
            return result
        });
    
        console.log('season_playerID: ' + season_playerID)
     */
    const checkData = require('./my_modules/checkData.js');

    var response = "";
    let playerID;
    checkData.findPlayer(player, (err, id) => {
        if (err) {
            console.error(err)
            console.log('Error pri hledani id hrace')
            return
        }
        playerID = id;
        if(playerID !== null) {
            response = 'POST was succesful and ID was founded'
        }
        else {
            response = 'ID not found'
        }   

    });
    // posílá odpověď
    res.send(response)
})

// nastaví port na 3000
app.listen(3000, () => console.log("server is listenign at 3000...."))
// nastaví adresář, ze kterého se můžou brát data
app.use(express.static('public'))


