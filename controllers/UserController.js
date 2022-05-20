'use strict'

const response = require('../response');
const database = require('../settings/database');

exports.User = (req, res) => {
    database.query('SELECT * FROM `user`',(error,rows,fields)=> {
        if(error){
             console.error('Error connecting to database')
        }
        else{
            response.status(rows,res)
        }
    })
}