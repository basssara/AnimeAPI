//api and routes to manipulate with http

const { request, response } = require("express");
const express = require("express");
const router = express.Router();
const conn = require('../config/db.conn')

//for news page
const NewsController = require('../controllers/news.controller')

//get all news
router.get('/news', NewsController.getNewsList);

//get news by Id
router.get('/news/:id', NewsController.getNewsListByID)

//create news
router.get('/addnews', NewsController.addNews)

//create news
router.post('/addnews', NewsController.createNewNewsList)

//updated news
router.get('/newsdash', NewsController.getNewsListAll);
router.put('/newsdash/:id', NewsController.updateNews)

//delete news
router.get("/newsdel/:id", NewsController.deleteNews)
router.delete("/newsdel/:id", NewsController.deleteNews)

//get all news list
module.exports = router