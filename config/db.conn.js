const mysql = require('mysql')

//create here connection

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'nekome'
})

//connect to db
connection.connect(err => {
  if (err) throw error;
  console.log("Succesfully connect");
});

//export our connection
module.exports = connection