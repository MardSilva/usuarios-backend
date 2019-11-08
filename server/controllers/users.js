//definido a ideia da 'view' do usuário

//constante do bcrypt
const bcrypt = require('bcrypt');

//constante do mongoose
const mongoose = require('mongoose');

//constante definindo o model do usuário
const modelUser = mongoose.model('User');

//variável (array) de controle de usuário
let userController = {};

userController.allUsers = (req, res) => {

    //definido os itens do método allUsers
    modelUser.find()
    .then(results => res.json(results)) //mano, se puder, passa tudo da sua vida pra um JSON, sério. Formato maravilhoso.
    .catch(err => res.send(err)); //é, pode dar ruim né? então já deixa o catch no jeitinho ;)
}


//controle de criação do usuário

userController.newUser = (req, res) => {

    //para criar o usuário, temos de pensar da seguinte forma:
    // -> Validar o username e o password, depois disso, validar se ele já não existe, se não existir, 
    //cadastrar e informar que tá disponível, se existir, retornar pra tentar novamente

    userController.newUser = (req, res) => {

        if(req.body.username && req.body.password) {
          if(req.body.password2 && req.body.password == req.body.password2) {
      
            modelUser.findOne({ 'username': req.body.username })
              .then(user => {
      
                if(user) {
                  res.json({ success: false, message: 'Esse nome de usuário não está disponível!' });
                
                } else {
      
                  bcrypt.hash(req.body.password, 10)
                    .then(hash => {
      
                      let encryptedPassword = hash;
                      
                      let newUser = new modelUser({
                        username: req.body.username,
                        password: encryptedPassword,
                        email: req.body.email,
                        ehAdministrador: req.body.ehAdministrador
                      });
      
                      newUser.save()
                        .then(() => res.json({ success: true, message: 'O usuário foi criado com sucesso!', statusCode: 201 }))
                        .catch(err => res.json({ success: false, message: err, statusCode: 500 }));
                    })
      
                    .catch(err => res.json({ success: false, message: err, statusCode: 500 }));
                }
              })
          
          } else {
      
            res.json({ success: false, message: 'A senha informada não é a mesma. Por favor, verifique e digite novamente.', statusCode: 400 });
          }
      
        } else {
      
          res.json({ success: false, message: 'O usuário e senha são campos obrigatórios para se realizar um cadastro.', statusCode: 400 });
        }
      }

}
module.exports = userController;