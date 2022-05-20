'use strict'

module.exports = (app) => {

    const UserController = require('../controllers/UserController');
    const LoginControler = require('../controllers/LoginControler');
    
    app.route('/user').get(UserController.User);
    app.route('/login').post(LoginControler.Login);

}