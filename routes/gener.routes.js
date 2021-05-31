//api and routes to manipulate with http

const { request, response } = require("express");
const express = require("express");
const router = express.Router();
const conn = require('../config/db.conn')

const GenreController = require('../controllers/genre.controller')

//get all genre
router.get('/genre', GenreController.getGenreList);

//get genre by Id
router.get('/genre/:id', GenreController.getGenreListByID)

//create genre
router.post('/genre', GenreController.createNewGenreList)

//updated genre
router.put('/genre/:id', GenreController.updateGenre)

//delete genre
router.delete("/genre/:id", GenreController.deleteGenre)

//get all genre list
module.exports = router
