const server = require('express');
const path = require('path');

const app = server();

app.use(server.static('public'))
app.get ('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'))})

app.get ('/babbage', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'babbage.html'))
})


const port = 3030

app.listen (port, () => console.log ('Levante el servidor en http://localhost:' + port));
