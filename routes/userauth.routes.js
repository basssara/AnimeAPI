// router/routes

const express = require('express');
const router = express.Router();

const bcrypt = require('bcryptjs');
const uuid = require('uuid');
const jwt = require('jsonwebtoken');

const db = require('../config/db.conn')
const userMiddleware = require('./user')

router.get('/sign-up', function(req, res, next) {
    res.render('sign-up', {title: 'Login', isLogin: true});
  });

router.post('/sign-up', userMiddleware.validateRegister, (req, res, next) => {
    db.query(
        `SELECT * FROM auth WHERE LOWER(username) = LOWER(${db.escape(
            req.body.username
        )});`,
        (err, result) => {
            if(result.length) {
                return res.render('sign-up',{
                    msg: 'This username is already in use!'
                })
            } else {
                //username is available
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    if (err) {
                        return res.status(500).send({
                            msg: err
                        })
                    } else {
                        //hash hashed pw => add to database
                        db.query(
                            `INSERT INTO auth (id, username, password, registered) VALUES ('${uuid.v4()}', ${db.escape(
                                req.body.username
                            )}, ${db.escape(hash)}, now())`,
                            (err, result) => {
                                if(err) {
                                    throw err
                                    return res.status(400).send({
                                        msg: err
                                    })
                                }
                                return res.render('sign-up',{
                                    msge: 'Registered!'
                                })
                            }
                        )
                    }
                })
            }
        }
    )
});

router.get('/', function(req, res, next) {
    res.render('login', {title: 'Login', isLogin: true});
  });

router.post('/login', (req, res, next) => {
    db.query(
        `SELECT * FROM auth WHERE username = ${db.escape(req.body.username)};`,
        (err, result) => {
            // user does not exist
            if(err) {
                throw err
                return res.status(400).send({
                    msg: err
                })
            }

            if(!result.length) {
                return res.render('login',{
                    msg: 'Username or password is incorrect!'
                })
            }

            // check password
            bcrypt.compare(
                req.body.password,
                result[0]['password'],
                (bErr, bResult) => {
                    //wrong password
                    if(bErr) {
                        throw bErr
                        return res.status(401).send({
                            msg: 'Username or password is incorrect!'
                        })
                    }

                    if(bResult) {
                        const token = jwt.sign({
                            username: result[0].username,
                            userId: result[0].id
                        },
                        'SECRETKEY', {
                            expiresIn: '7d'
                        }
                        )

                        db.query(
                            `UPDATE auth SET last_login = now() WHERE id = '${result[0].id}'`
                        )
                        return res.render('index',{
                            msg: 'Logged in!',
                            token,
                            user: result[0]
                        })
                    }
                    return res.render('login',{
                        msg: 'Username or password is incorrect!'
                    })
                }
            )
        }
    )
});


router.get('/home', userMiddleware.isLoggedIn, (req, res, next) => {
    console.log(req.userData);
    res.send('This is the secret content. Only logged in users can see that!');
  });

module.exports = router;