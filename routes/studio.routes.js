//api and routes to manipulate with http

const { request, response } = require("express");
const express = require("express");
const router = express.Router();
const conn = require('../config/db.conn')

const StudioController = require('../controllers/studio.controller')

//get all studio
router.get('/studio', StudioController.getStudioList);

//get studio by Id
router.get('/studio/:id', StudioController.getStudioListByID)

//create studio
router.post('/studio', StudioController.createNewStudioList)

//updated studio
router.put('/studio/:id', StudioController.updateStudio)

//delete studio
router.delete("/animes/:id", StudioController.deleteStudio)

//get all studio list
module.exports = router
