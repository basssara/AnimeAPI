const AuthorModel = require('../model/author.model')

// get all author
exports.getAuthorList = (req, res) => {
    //console.log('here all authors');
    AuthorModel.getAuthorList((err, authors) => {
        //console.log('We are here');
        if(err)
        res.send(err);
        //console.log('Authors', author);
        res.render('authors', { authors })
    })
}

//get author by Id
exports.getAuthorListByID = (req, res) => {
    //console.log('get author by id')
    AuthorModel.getAuthorListByID(req.params.id, (err, authors) => {
        if(err)
        res.send(err)
        //console.log('single author adata', anime);
        res.render('authorid', { authors })
    })
}

//create new author 
exports.createNewAuthorList = (req, res) => {
    const authorReqData = new AuthorModel(req.body);
    console.log('authorReqData', authorReqData);
    //check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0) {
       res.sendStatus(400).send({success: false, message: 'Please fill'})
    } else {
        console.log('valid data');
        AuthorModel.createAuthor(authorReqData, (err, author) => {
            if(err)
            res.send(err);
            return res.json({status: true, message: 'Successfully created', data: author.insertId})
        })
    }
}

//update author
exports.updateAuthor = (req, res) => {
    const authorReqData = new AuthorModel(req.body);
    console.log('authorReqData update', authorReqData);
    //check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0) {
       res.sendStatus(400).send({success: false, message: 'Please fill'})
    } else {
        console.log('valid data');
        AuthorModel.updateAuthor(req.params.id, authorReqData, (err, author) => {
            if(err)
            res.send(err);
            return res.json({status: true, message: 'Successfully updated', data: author.insertId})
        })
    }
}

//delete author
exports.deleteAuthor = (req, res) => {
    AuthorModel.deleteAuthor(req.params.id, (err, author) => {
        if(err)
        res.send(err);
        res.json({success: true, message: 'Author deleted'})
    })
}