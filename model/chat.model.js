const dbCon = require('../config/db.conn');

const Chat = function (chat) {
    this.text = chat.text
    this.username = chat.username
}

//get chat list
Chat.getChatList = (result) => {
    dbCon.query('SELECT * FROM comment', (err, res) => {
        if(err) {
            console.log('Error while fetching', err);
            result(null, err);
          } else {
            //console.log('Anime fetching succesfully');
            result(null,res);
          }
    })
}

//create chat
Chat.createChat = (chatReqData, result) => {
    dbCon.query('INSERT INTO comment SET ?', chatReqData, (err, res) => {
        if(err) {
          console.log('Error while inserting data');
          result(null, err)
        } else {
          console.log('Chat created succesfully');
          result(null, res)
        }
      }) 
}

module.exports = Chat