/*const conn = require('../config/db.conn')
var atob = require('atob');
var Cryptr = require('cryptr'),
cryptr = new Cryptr('myTotalySecretKey');*/


//middleware/user.js

var jwt = require('jsonwebtoken');

module.exports = {
    validateRegister: (req, res, next) => {
        //username min length 3
        if(!req.body.username || req.body.username.length < 3) {
            return res.status(400).send({ 
                msg: 'Please enter a username with min 3 chars' 
            })
        }

        //password min 3 chars
        if(!req.body.password || req.body.password.length < 6) {
            return res.render('sign-up',{ 
                msg: 'Please enter a password with min. 6 chars' 
            })
        }

        //password (repeat) does not match
        if(
            !req.body.password_repeat ||
            req.body.password != req.body.password_repeat
        ) {
            return res.render('sign-up',{ msg: 'Both passwords must match' })
        }
        
        next()
    },
    isLoggedIn: (req, res, next) => {
        try {
          const token = req.headers.authorization.split(' ')[1];
          const decoded = jwt.verify(
            token,
            'SECRETKEY'
          );
          req.userData = decoded;
          next();
        } catch (err) {
          return res.render('page401',{
            msg: 'Your session is not valid!'
          });
        }
      }
}
