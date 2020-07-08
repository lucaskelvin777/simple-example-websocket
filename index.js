const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const {routerHome} = require('./routes/home');
const {webSocket} =  require ('./service/websocket');
const server = require('http').createServer(app);
webSocket(server);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(routerHome);
server.listen(3000, () => {
  console.log('starting');
})
