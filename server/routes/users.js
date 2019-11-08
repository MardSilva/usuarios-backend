//criando a rota de usuário

//constante do usuário
const userController = require('../controllers/users');

//exportando o módulo
module.exports = (app) => {

    app.route('/v1/users')
    .get(userController.allUsers) // método GET da rota de usuário
    .post(userController.newUser) // método POST da rota de usuário
}