//api and routes to manipulate with http

const { request, response } = require("express");
const express = require("express");
const router = express.Router();
const conn = require('../config/db.conn')

//for anime page
const AnimeController = require('../controllers/anime.controller')

//get all anime
router.get('/animes', AnimeController.getAnimeList);

//get anime by Id
router.get('/animes/:id', AnimeController.getAnimeListByID)

//create anime
router.get('/addanime', AnimeController.addAnime)

//create anime
router.post('/addanime', AnimeController.createNewAnimeList)

//comments
router.post('/addcomment', AnimeController.createNewCommentList)
router.get('/animes/:id', AnimeController.addComment)
router.get('/animes/:id', AnimeController.getCommentList);

//updated anime
router.get('/animedash', AnimeController.getAnimeListAll);
router.get('/animedash/:id', AnimeController.updateAnimeOne);
router.put('/animedash/:id', AnimeController.updateAnime)

//delete
router.get('/animedel/:id', AnimeController.deleteAnime);
router.delete("/animedel/:id", AnimeController.deleteAnime)

//get all anime list
module.exports = router