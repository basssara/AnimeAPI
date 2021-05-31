const MangaModel = require('../model/manga.model')
const DBcon = require('../config/db.conn');

// get all manga
exports.getMangaList = (req, res) => {
    //console.log('here all manga');
    MangaModel.getMangaList((err, manga) => {
        //console.log('We are here');
        if(err)
        res.send(err);
        //console.log('Manga', manga);
        res.render('mangas', { manga })
    })
}

// manga all dash
exports.getMangaListAll = (req, res) => {
    //console.log('here all manga');
    MangaModel.getMangaList((err, mangaall) => {
        //console.log('We are here');
        if(err)
        res.send(err);
        //console.log('Manga', manga);
        res.render('mangaall', { mangaall })
    })
}

//get anime by Id
exports.getMangaListByID = (req, res) => {
    //console.log('get manga by id')
    MangaModel.getMangaListByID(req.params.id, (err, manga) => {
        if(err)
        res.send(err);
        //console.log('single manga adata', manga);
        res.render('mangaid', {manga})
    })
}

//display 
exports.addManga = (req, res) => {
    res.render('add-manga')
}

//create newmanga 
exports.createNewMangaList = (req, res) => {
    console.log('req data', req.body)
    const mangaReqData = new MangaModel(req.body)
    //check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.render(400).send({success: false, message: 'Please fill all fields'})
    } else {
        console.log('valid')
        res.redirect('/mangadash')
        MangaModel.createManga(mangaReqData, (err, manga) => {
            if(err) {
                res.send(err)
                //res.redirect('/dashboard')
                res.render('dashboard',{status: false, message: 'Smth wrong', data: manga.insertId})
            }
        })
    }
}


//update anime
exports.updateManga = (req, res) => {
    const mangaReqData = new MangaModel(req.body);
    console.log('mangaReqData update', mangaReqData);
    //check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0) {
       res.sendStatus(400).send({success: false, message: 'Please fill'})
    } else {
        console.log('valid data');
        MangaModel.updateManga(req.params.id, mangaReqData, (err, manga) => {
            if(err)
            res.send(err);
            return res.json({status: true, message: 'Successfully updated', data: manga.insertId})
        })
    }
}

//delete manga
exports.deleteManga = (req, res) => {
    MangaModel.deleteManga(req.params.id, (err, manga) => {
        if(err)
        res.send(err);
        res.redirect( '/mangadash')
    })
}