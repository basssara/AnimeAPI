const ChatModel = require('../model/chat.model')
const DBcon = require('../config/db.conn')

//get all messages
exports.getChatList = (req, res) => {
    //console.log('here all messages')
    ChatModel.getChatList((err, chat) => {
        //console.log('We are here')
        if(err)
        res.send(err);
        //console.log('Chat', chat)
        res.render('chat', {chat})
    })
}

//displays chat adding
exports.addChat = (req, res) => {
    res.render('chat')
}

//create new anime 
exports.messageInChat = (req, res) => {
    console.log('req data', req.body)
    const chatReqData = new ChatModel(req.body)
    //check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.render(400).send({success: false, message: 'Please fill all fields'})
    } else {
        console.log('valid')
        res.redirect('/chat')
        ChatModel.createChat(chatReqData, (err, chat) => {
            if(err) {
                res.send(err)
                //res.redirect('/dashboard')
                res.render('chat',{status: false, message: 'Smth wrong', data: chat.insertId})
            }
        })
    }
}
