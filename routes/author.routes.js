//api and routes to manipulate with http

const { request, response } = require("express");
const express = require("express");
const router = express.Router();
const conn = require('../config/db.conn')

const AuthorController = require('../controllers/author.controller')

//get all author
router.get('/authors', AuthorController.getAuthorList);

//get author by Id
router.get('/authors/:id', AuthorController.getAuthorListByID)

//create author
router.post('/author', AuthorController.createNewAuthorList)

//updated author
router.put('/author/:id', AuthorController.updateAuthor)

//delete author
router.delete("/author/:id", AuthorController.deleteAuthor)


module.exports = router