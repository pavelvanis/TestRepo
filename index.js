
const express = require('express');
require('dotenv').config()
const app = express();


console.log(process.env.API_KEY);

app.listen(3000, () => console.log("server is listenign at 3000...."));
app.use(express.static('public'));


