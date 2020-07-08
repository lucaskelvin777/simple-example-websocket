let io;
let connections = [];
const {dados} = require('./../vars');
const webSocket = (server) => {
  io = require('socket.io')(server);
  io.on('connection', (client) => { 
    connections.push(client);
    emitMessage(dados);
  });
};
const emitMessage = (data) => {
  io.emit('change_data',data);
}
module.exports = {webSocket, emitMessage}