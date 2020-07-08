const express = require('express');
const {emitMessage} = require('./../service/websocket');
const routerHome = express.Router();
const {dados} = require('./../vars');
/**
 * 
 * Waiting 
 * name:string,
 * price:int
 */
routerHome.post('/', function (req, res) {
  dados.push(req.body);
  emitMessage(dados);
  res.status(200).json({ msg: 'OK!' });
});
routerHome.get('/', (req, res) => {
  res.status(200).json({ msg: 'Bem vindo' });
});
module.exports = { routerHome, dados };