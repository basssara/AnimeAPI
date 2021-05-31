const { request, response } = require("express");
const express = require("express");
const router = express.Router();
const conn = require('../config/db.conn')

//chat page
const ChatController = require('../controllers/chat.controller');
const { route } = require("./user.routes");

//get all messages
router.get('/chat', ChatController.getChatList)

//write message get
router.get('/chat', ChatController.addChat)

//write message post
router.post('/chat', ChatController.messageInChat)

module.exports = router