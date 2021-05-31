const GenreModel = require('../model/genre.model')

// get all genre
exports.getGenreList = (req, res) => {
    //console.log('here all genre');
    GenreModel.getGenreList((err, genre) => {
        //console.log('We are here');
        if(err)
        res.send(err);
        //console.log('genre', genre);
        res.render('genre', { genre })
    })
}

//get genre by Id
exports.getGenreListByID = (req, res) => {
    //console.log('get genre by id')
    GenreModel.getGenreListByID(req.params.id, (err, genre) => {
        if(err)
        res.send(err);
        //console.log('single genre data', genre);
        res.render('genreid', {genre})
    })
}

//create new genre 
exports.createNewGenreList = (req, res) => {
    const genreReqData = new GenreModel(req.body);
    console.log('genreReqData', genreReqData);
    //check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0) {
       res.sendStatus(400).send({success: false, message: 'Please fill'})
    } else {
        console.log('valid data');
        GenreModel.createGenre(genreReqData, (err, genre) => {
            if(err)
            res.send(err);
            return res.json({status: true, message: 'Successfully created', data: genre.insertId})
        })
    }
}

//update genre
exports.updateGenre = (req, res) => {
    const genreReqData = new GenreModel(req.body);
    console.log('genreReqData update', genreReqData);
    //check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0) {
       res.sendStatus(400).send({success: false, message: 'Please fill'})
    } else {
        console.log('valid data');
        GenreModel.updateGenre(req.params.id, genreReqData, (err, genre) => {
            if(err)
            res.send(err);
            return res.json({status: true, message: 'Successfully updated', data: genre.insertId})
        })
    }
}

//delete genre
exports.deleteGenre = (req, res) => {
    GenreModel.deleteGenre(req.params.id, (err, genre) => {
        if(err)
        res.send(err);
        res.json({success: true, message: 'Genre deleted'})
    })
}