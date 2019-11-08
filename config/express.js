//definindo padrões do arquivo express.js

//cosntante do express
const express = require('express');

//constante do consign
const consign = require('consign');

//constante do bodyParser
const bodyParser = require('body-parser');

//constante do path (caminho)
const path = require('path');

module.exports = () => {

    //definindo o app
    const app = express();

    app.set('port', (process.env.PORT || 3001));

    //configurações do app
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    //consign - autoload dos scripts e injetar na instância
    consign({ cwd: 'server'})
    .include('models')
    .include('controllers')
    .then('routes')

    .into(app);

    return app;
}