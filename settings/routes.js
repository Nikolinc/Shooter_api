'use strict'

module.exports = (app) => {

    const UserController = require('../controllers/UserController');
    const LoginControler = require('../controllers/LoginControler');
    const SingUpControler = require('../controllers/SingUpController');
    
    app.route('/user').get(UserController.User);
    app.route('/login').post(LoginControler.Login);
    app.route('/SingUp').post(SingUpControler.SingUp);
}