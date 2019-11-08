//arquivo de configuração da database (banco de dados)

const mongoose = require('mongoose');

//promisse do Mongoose
mongoose.Promise = global.Promise;

//conexão do mongoose
mongoose.connect('passa-aqui-sua-url-do-mongodbatlas', {useMongoClient : true });

//check da conexão, né parça?
mongoose.connection.on('conectado', () => {console.log('Conectado com o banco de dados, ufa!')});

//vai que não conecta né?
mongoose.connection.on('erro', (err) => {console.log('Ih rapaz, deu erro na conexão: ' + err)});

//se eu desconectar do banco, é bão mostrar né?
mongoose.connection.on('desconectado', () => { console.log('Fui desconectado, bip-bip :( ')});