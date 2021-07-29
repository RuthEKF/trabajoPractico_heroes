const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('public'))

app.get ('/', (req, res) => 
    res.sendFile(path.join(__dirname, 'views', 'index.html')))

app.get ('/babbage', (req, res) => 
    res.sendFile(path.join(__dirname, 'views', 'babbage.html'))
)
app.get ('/clarke', (req, res) => 
    res.sendFile(path.join(__dirname, 'views', 'clarke.html'))
)


const port = 3030