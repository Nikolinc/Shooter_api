'use strict'

const response = require('../response');
const database = require('../settings/database');

exports.Login = (req, res) => {
        
    let username = request.body.username;
    let password = request.body.password;
    console.log(request);
    console.log(password);
     if (username && password) {
         
          database.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
             
             if (error) throw error;
             
             if (results.length > 0) {
                
                 request.session.loggedin = true;
                 request.session.username = username;
                 
                 response.send('/you are logged in');
             } else {
                 response.send('Incorrect Username and/or Password!');
             }			
             response.end();
         });
     } else {
         response.send('Please enter Username and Password!');
         response.end();
     }
 };