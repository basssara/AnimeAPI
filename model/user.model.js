const dbCon = require('../config/db.conn');

const User = function (user) {
  this.username = use.username
}

//get all anime list 
User.getUserList = (result) => {
  dbCon.query('SELECT * FROM user', (err, res) => {
    if(err) {
      console.log('Error while fetching', err);
      result(null, err);
    } else {
      //console.log('Anime fetching succesfully');
      result(null,res);
    }
  })
}

//delete anime
User.deleteUser = (id, result) => {
  dbCon.query('DELETE FROM user WHERE id=?', [id], (err, res) => {
    if(err) {
      console.log('Error while deleting the user');
      result(null, err)
    } else {
      result(null, res)
    }
  })
}

module.exports = User;