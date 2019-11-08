//entidade usuários - users.js

//constante do mongoose
const mongoose = require('mongoose');

//constante do Schema do mongoose
const Schema = mongoose.Schema;

const UserSchema = new Schema({

    //itens do esquema da entidade usuários
    //usuário, senha, email, (booleana de administrador)
    
    username: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },
    ehAdministrador: {
        type: Boolean,
        required: true,
        default: false
    }
});

mongoose.model('User', UserSchema);