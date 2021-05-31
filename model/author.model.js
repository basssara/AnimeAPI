const dbCon = require('../config/db.conn')

const Author = function(author) {
    this.firstname = author.firstname
    this.lastname = author.lastname
    this.dateofbirth = author.dateofbirth
    this.about = author.about
}

//get all author list
Author.getAuthorList = (result) => {
    dbCon.query('SELECT * FROM author', (err, res) => {
      if(err) {
        console.log('Error while fetching', err);
        result(null, err);
      } else {
        //console.log('Author fetching succesfully');
        result(null,res);
      }
    })
  }

  //get author by Id from DB
Author.getAuthorListByID = (id, result) => {
  dbCon.query('SELECT * FROM author WHERE id=?', id, (err, res) => {
    if(err) {
      console.log('Error while fetch author by id', err);
      result(null, err);
    } else {
      result(null, res);
    }
  })
}

//create new anime 
Author.createAuthor = (authorReqData, result) => {
  dbCon.query('INSERT INTO author SET ?', authorReqData, (err, res) => {
    if(err) {
      console.log('Error while inserting data');
      result(null, err)
    } else {
      console.log('Author created succesfully');
      result(null, res)
    }
  })
}

//update author
Author.updateAuthor = (id, authorReqData, result) => {
  dbCon.query('UPDATE author SET firstname=?, lastname=?, dateofbirth=?, about=? WHERE id = ?',
  [authorReqData.firstname, authorReqData.lastname, authorReqData.dateofbirth, authorReqData.about, id], 
  (err, res) => {
    if(err) {
      console.log('Error while updating the author');
      result(null, err);
    } else {
      console.log('author updated successfully');
      result(null, res);
    }
  })
}

//delete studio
Author.deleteAuthor = (id, result) => {
  dbCon.query('DELETE FROM author WHERE id=?', [id], (err, res) => {
    if(err) {
      console.log('Error while deleting the anime');
      result(null, err)
    } else {
      result(null, res)
    }
  })
}

  module.exports = Author;