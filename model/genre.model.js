const dbCon = require('../config/db.conn');

const Genre = function (genre) {
  this.genrename = genre.genrename
}

//get all genre list 
Genre.getGenreList = (result) => {
  dbCon.query('SELECT * FROM genre', (err, res) => {
    if(err) {
      console.log('Error while fetching', err);
      result(null, err);
    } else {
      //console.log('Genre fetching succesfully');
      result(null,res);
    }
  })
}

//get genre by Id from DB
Genre.getGenreListByID = (id, result) => {
  dbCon.query('SELECT * FROM genre WHERE id=?', id, (err, res) => {
    if(err) {
      console.log('Error while fetch anime by id', err);
      result(null, err);
    } else {
      result(null, res);
    }
  })
}

//create new genre 
Genre.createGenre = (genreReqData, result) => {
  dbCon.query('INSERT INTO genre SET ?', genreReqData, (err, res) => {
    if(err) {
      console.log('Error while inserting data');
      result(null, err)
    } else {
      console.log('Genre created succesfully');
      result(null, res)
    }
  })
}

//update genre
Genre.updateGenre = (id, genreReqData, result) => {
  dbCon.query('UPDATE genre SET usergenre =? WHERE id = ?',
  [genreReqData.genrename], 
  (err, res) => {
    if(err) {
      console.log('Error while updating the genre');
      result(null, err);
    } else {
      console.log('Genre updated successfully');
      result(null, res);
    }
  })
}

//delete genre
Genre.deleteGenre = (id, result) => {
  dbCon.query('DELETE FROM genre WHERE id=?', [id], (err, res) => {
    if(err) {
      console.log('Error while deleting the genre');
      result(null, err)
    } else {
      result(null, res)
    }
  })
}

module.exports = Genre;