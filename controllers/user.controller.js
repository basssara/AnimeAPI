const UserModel = require('../model/user.model')
const DBcon = require('../config/db.conn');

// get all anime
exports.getUserList = (req, res) => {
    //console.log('here all anime');
    UserModel.getUserList((err, alluser) => {
        //console.log('We are here');
        if(err)
        res.send(err);
        //console.log('Anime', anime);
        res.render('alluser', { alluser })
    })
}

//delete users
exports.deleteUser = (req, res) => {
    UserModel.deleteUser(req.params.id, (err, user) => {
        if(err)
        res.send(err);
        res.redirect( '/alluser')
    })
}