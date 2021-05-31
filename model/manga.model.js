const dbCon = require('../config/db.conn');

const Manga = function (manga) {
  this.manganame = manga.manganame;
  this.mangadescription = manga.mangadescription;
  this.author = manga.author;
  this.studio = manga.studio
  this.genre = manga.genre
  this.file = manga.file 
  this.img = manga.img;
}

//get all manga list 
Manga.getMangaList = (result) => {
  dbCon.query('SELECT * FROM manga', (err, res) => {
    if(err) {
      console.log('Error while fetching', err);
      result(null, err);
    } else {
      //console.log('Manga fetching succesfully');
      result(null,res);
    }
  })
}

//get manga by Id from DB
Manga.getMangaListByID = (id, result) => {
  dbCon.query('SELECT * FROM manga WHERE id=?', id, (err, res) => {
    if(err) {
      console.log('Error while fetch manga by id', err);
      result(null, err);
    } else {
      result(null, res);
    }
  })
}

//create new anime 
Manga.createManga = (mangaReqData, result) => {
  dbCon.query('INSERT INTO manga SET ?', mangaReqData, (err, res) => {
    if(err) {
      console.log('Error while inserting data');
      result(null, err)
    } else {
      console.log('Manga created succesfully');
      result(null, res)
    }
  })
}

//update anime
Manga.updateManga = (id, mangaReqData, result) => {
  dbCon.query('UPDATE manga SET manganame=?, mangadescription=? WHERE id = ?',
  [mangaReqData.manganame, mangaReqData.mangadescription, id], 
  (err, res) => {
    if(err) {
      console.log('Error while updating the manga');
      result(null, err);
    } else {
      console.log('Manga updated successfully');
      result(null, res);
    }
  })
}

//delete manga
Manga.deleteManga = (id, result) => {
  dbCon.query('DELETE FROM manga WHERE id=?', [id], (err, res) => {
    if(err) {
      console.log('Error while deleting the manga');
      result(null, err)
    } else {
      result(null, res)
    }
  })
}

module.exports = Manga;