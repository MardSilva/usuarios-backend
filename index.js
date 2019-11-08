//arquivo index.js

//definindo a constante do app
const app = require('./config/express')();

//database
require('./config/database');

app.listen(app.get('port'), () => { console.log('Servidor tá rodando na porta 3001... :) ')});
