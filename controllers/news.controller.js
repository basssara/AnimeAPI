const NewsModel = require('../model/news.model')
const DBcon = require('../config/db.conn');

// get all news
exports.getNewsList = (req, res) => {
    //console.log('here all news');
    NewsModel.getNewsList((err, news) => {
        //console.log('We are here');
        if(err)
        res.send(err);
        //console.log('news', news);
        res.render('news', { news })
    })
}

//for update
exports.getNewsListAll = (req, res) => {
    //console.log('here all news');
    NewsModel.getNewsList((err, newsall) => {
        //console.log('We are here');
        if(err)
        res.send(err);
        //console.log('news', news);
        res.render('newsall', { newsall })
    })
}

//get news by Id
exports.getNewsListByID = (req, res) => {
    //console.log('get news by id')
    NewsModel.getNewsListByID(req.params.id, (err, news) => {
        if(err)
        res.send(err);
        //console.log('single news adata', anime);
        res.render('newsid', {news})
    })
}

//display 
exports.addNews = (req, res) => {
    res.render('add-news')
}

//create new news 
exports.createNewNewsList = (req, res) => {
    console.log('req data', req.body)
    const newsReqData = new NewsModel(req.body)
    //check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.render(400).send({success: false, message: 'Please fill all fields'})
    } else {
        console.log('valid')
        res.redirect('/dashboard')
        NewsModel.createNews(newsReqData, (err, news) => {
            if(err) {
                res.send(err)
                //res.redirect('/dashboard')
                res.render('newsall',{status: false, message: 'Smth wrong', data: news.insertId})
            }
        })
    }
}

exports.updateNewsOne = (req, res) => {
    res.render('update-news')
}

//update anime
exports.updateNews = (req, res) => {
    const newsReqData = new NewsModel(req.body);
    console.log('newsReqData update', newsReqData);
    //check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0) {
       res.sendStatus(400).send({success: false, message: 'Please fill'})
    } else {
        console.log('valid data');
        NewsModel.updateNews(req.params.id, newsReqData, (err, news) => {
            if(err)
            res.send(err);
            return res.json({status: true, message: 'Successfully updated', data: news.insertId})
        })
    }
}

//delete anime
exports.deleteNews = (req, res) => {
    NewsModel.deleteNews(req.params.id, (err, news) => {
        if(err)
        res.send(err);
        res.redirect( '/newsdash')
    })
}