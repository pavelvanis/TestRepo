
const express = require('express');
require('dotenv').config()
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json())

// nastaví metodu post, která přijde z /submit 
app.post('/submit', (req, res ) => {
    const player = req.body.player;
    console.log('Player: '+player);

    app.get

    // posílá odpověď
    res.send('POST was succesful');
})

// nastaví port na 3000
app.listen(3000, () => console.log("server is listenign at 3000...."));
// nastaví adresář, ze kterého se můžou brát data
app.use(express.static('public'));


