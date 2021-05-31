const AnimeModel = require('../model/anime.model')
const CommentModel = require('../model/comments.model')
const DBcon = require('../config/db.conn');

// get all anime
exports.getAnimeList = (req, res) => {
    //console.log('here all anime');
    AnimeModel.getAnimeList((err, anime) => {
        //console.log('We are here');
        if(err)
        res.send(err);
        //console.log('Anime', anime);
        res.render('animes', { anime })
    })
}

//for update
exports.getAnimeListAll = (req, res) => {
    //console.log('here all anime');
    AnimeModel.getAnimeList((err, animeall) => {
        //console.log('We are here');
        if(err)
        res.send(err);
        //console.log('Anime', anime);
        res.render('animeall', { animeall })
    })
}

//get anime by Id
exports.getAnimeListByID = (req, res) => {
    //console.log('get anime by id')
    AnimeModel.getAnimeListByID(req.params.id, (err, anime) => {
        if(err)
        res.send(err);
        //console.log('single anime adata', anime);
        res.render('animeid', {anime})
    })
}

//display 
exports.addAnime = (req, res) => {
    res.render('add-anime')
}

//create new anime 
exports.createNewAnimeList = (req, res) => {
    console.log('req data', req.body)
    const animeReqData = new AnimeModel(req.body)
    //check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.render(400).send({success: false, message: 'Please fill all fields'})
    } else {
        console.log('valid')
        res.redirect('/animedash')
        AnimeModel.createAnime(animeReqData, (err, anime) => {
            if(err) {
                res.send(err)
                //res.redirect('/dashboard')
                res.render('add-anime',{status: false, message: 'Smth wrong', data: anime.insertId})
            }
        })
    }
}

exports.updateAnimeOne = (req, res) => {
    res.render('update-anime')
}

//update anime
exports.updateAnime = (req, res) => {
    const animeReqData = new AnimeModel(req.body);
    console.log('animeReqData update', animeReqData);
    //check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0) {
       res.sendStatus(400).send({success: false, message: 'Please fill'})
    } else {
        console.log('valid data');
        res.redirect('/animedash')
        AnimeModel.updateAnime(req.params.id, animeReqData, (err, anime) => {
            if(err)
            res.send(err);
            return res.render('update-anime', {status: true, message: 'Successfully updated', data: anime.insertId})
        })
    }
}

//delete anime
exports.deleteAnime = (req, res) => {
    AnimeModel.deleteAnime(req.params.id, (err, anime) => {
        if(err)
        res.send(err);
        res.redirect( '/animedash')
    })
}

// * Comments * //
exports.getCommentList = (req, res) => {
    //console.log('here all anime');
    CommentModel.getCommentList((err, comment) => {
        //console.log('We are here');
        if(err)
        res.send(err);
        //console.log('Anime', anime);
        res.render('animes/:id', { comment })
    })
}

//display 
exports.addComment = (req, res) => {
    res.render('animes/:id')
}

//create comment 
exports.createNewCommentList = (req, res) => {
    console.log('req data', req.body)
    const commentReqData = new CommentModel(req.body)
    //check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.render(400).send({success: false, message: 'Please fill all fields'})
    } else {
        console.log('valid')
        res.redirect('/animes/:id')
        CommentModel.createComment(commentReqData, (err, comment) => {
            if(err) {
                res.send(err)
                //res.redirect('/dashboard')
                res.render('dashboard',{status: false, message: 'Smth wrong', data: comment.insertId})
            }
        })
    }
}