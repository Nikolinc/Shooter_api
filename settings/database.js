const mysql = require('mysql2');
const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'admin',
    database:'shoote'
})

connection.connect((error)=>{
    if(error){
        return console.error(error)
    }
    else{
        console.log('connection successful');
    }
})
module.exports = connection;