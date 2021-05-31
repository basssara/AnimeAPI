//api and routes to manipulate with http

const { request, response } = require("express");
const express = require("express");
const router = express.Router();
const conn = require('../config/db.conn')

const MangaController = require('../controllers/manga.controller')

//get all manga
router.get('/mangas', MangaController.getMangaList);

//get manga by Id
router.get('/mangas/:id', MangaController.getMangaListByID)

//create manga
router.get('/addmanga', MangaController.addManga)

//create manga
router.post('/addmanga', MangaController.createNewMangaList)

//updated manga
router.get('/mangadash', MangaController.getMangaListAll);
router.put('/mangadash/:id', MangaController.updateManga)

// delete manga
router.get('/mangadel/:id', MangaController.deleteManga);
router.delete("/mangadel/:id", MangaController.deleteManga)

//get all manga list
module.exports = router