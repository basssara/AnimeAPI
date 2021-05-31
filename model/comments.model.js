const dbCon = require('../config/db.conn');


const Comment = function (comment) {
    this.text = comment.text
    this.username = comment.username
  }


//get all comments list 
Comment.getCommentList = (result) => {
    dbCon.query('SELECT * FROM comment', (err, res) => {
      if(err) {
        console.log('Error while fetching', err);
        result(null, err);
      } else {
        //console.log('Comment fetching succesfully');
        result(null,res);
      }
    })
  }

//create comments
Comment.createComment = (commentReqData, result) => {
    dbCon.query('INSERT INTO comment SET ?', commentReqData, (err, res) => {
      if(err) {
        console.log('Error while inserting data');
        result(null, err)
      } else {
        console.log('comment created succesfully');
        result(null, res)
      }
    })
  }

module.exports = Comment