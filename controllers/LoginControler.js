'use strict'

const response = require('../response');
const database = require('../settings/database');

exports.Login = (req, res) => {
        
    let username = req.body.username;
    let password = req.body.password;
    console.log(req.body);
    console.log(password);
     if (username && password) {
         
          database.query('SELECT * FROM `user` WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
             
             if (error) throw error;
             
             if (results.length > 0) {
                
                //req.session.loggedin = true;
               // req.session.username = username;
                 
                res.send('/you are logged in');
             } else {
                res.send('Incorrect Username and/or Password!');
             }			
             res.end();
         });
     } else {
        res.send('Please enter Username and Password!');
        res.end();
     }
 };