const dbCon = require('../config/db.conn');

const Anime = function (anime) {
  this.animename = anime.animename;
  this.animedescription = anime.animedescription;
  this.animeseries = anime.animeseries;
  this.videoid = anime.videoid;
  this.img = anime.img;
  this.comments = anime.comments
  this.dateofrelease = Date();
}

//get all anime list 
Anime.getAnimeList = (result) => {
  dbCon.query('SELECT * FROM anime', (err, res) => {
    if(err) {
      console.log('Error while fetching', err);
      result(null, err);
    } else {
      //console.log('Anime fetching succesfully');
      result(null,res);
    }
  })
}

//get anime by Id from DB
Anime.getAnimeListByID = (id, result) => {
  dbCon.query('SELECT * FROM anime WHERE id=?', id, (err, res) => {
    if(err) {
      console.log('Error while fetch anime by id', err);
      result(null, err);
    } else {
      result(null, res);
    }
  })
}

//create new anime 
Anime.createAnime = (animeReqData, result) => {
  dbCon.query('INSERT INTO anime SET ?', animeReqData, (err, res) => {
    if(err) {
      console.log('Error while inserting data');
      result(null, err)
    } else {
      console.log('Anime created succesfully');
      result(null, res)
    }
  })
}

//update anime
Anime.updateAnime = (id, animeReqData, result) => {
  dbCon.query('UPDATE anime SET animename=?, animedescription=?, animeseries=?, videoid = ?, img = ? WHERE id = ?',
  [animeReqData.animename, animeReqData.animedescription, animeReqData.img, animeReqData.videoid, animeReqData.animeseries, id], 
  (err, res) => {
    if(err) {
      console.log('Error while updating the anime');
      result(null, err);
    } else {
      console.log('Anime updated successfully');
      result(null, res);
    }
  })
}

//delete anime
Anime.deleteAnime = (id, result) => {
  dbCon.query('DELETE FROM anime WHERE id=?', [id], (err, res) => {
    if(err) {
      console.log('Error while deleting the anime');
      result(null, err)
    } else {
      result(null, res)
    }
  })
}

module.exports = Anime;