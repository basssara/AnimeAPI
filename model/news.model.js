const dbCon = require('../config/db.conn');

const News = function (news) {
  this.title = news.title
  this.text = news.text
  this.img = news.img
}

//get all news list 
News.getNewsList = (result) => {
  dbCon.query('SELECT * FROM news', (err, res) => {
    if(err) {
      console.log('Error while fetching', err);
      result(null, err);
    } else {
      //console.log('News fetching succesfully');
      result(null,res);
    }
  })
}

//get news by Id from DB
News.getNewsListByID = (id, result) => {
  dbCon.query('SELECT * FROM news WHERE id=?', id, (err, res) => {
    if(err) {
      console.log('Error while fetch news by id', err);
      result(null, err);
    } else {
      result(null, res);
    }
  })
}

//create new news 
News.createNews = (newsReqData, result) => {
  dbCon.query('INSERT INTO news SET ?', newsReqData, (err, res) => {
    if(err) {
      console.log('Error while inserting data');
      result(null, err)
    } else {
      console.log('news created succesfully');
      result(null, res)
    }
  })
}

//update news
News.updateNews = (id, animeReqData, result) => {
  dbCon.query('UPDATE news SET title=?, text=?, img = ? WHERE id = ?',
  [newsReqData.title, newsReqData.text, newsReqData.img, id], 
  (err, res) => {
    if(err) {
      console.log('Error while updating the news');
      result(null, err);
    } else {
      console.log('News updated successfully');
      result(null, res);
    }
  })
}

//delete news
News.deleteNews = (id, result) => {
  dbCon.query('DELETE FROM news WHERE id=?', [id], (err, res) => {
    if(err) {
      console.log('Error while deleting the news');
      result(null, err)
    } else {
      result(null, res)
    }
  })
}

module.exports = News;