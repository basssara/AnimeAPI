const express = require('express')
const router = express.Router();
const mysql = require('mysql')
const conn = require('../config/db.conn')

const UserController = require('../controllers/user.controller')

router.get('/alluser', UserController.getUserList)

//delete
router.get('/userdel/:id', UserController.deleteUser)
router.delete('/userdel/:id', UserController.deleteUser)


router.get('/register', function(req, res, next) {
    /*if(req.session.flag == 1) {
        req.session.destroy()
        res.render('registration-form', { title: 'CodeLanguage', message : 'Email already Exists', flag : 1 })
    } else if(req.session.flag == 2) {
        req.session.destroy()
        res.render('registration-form', { title: 'CodeLanguage', message : 'Registration Done. Please Login', flag : 1 })
    } else if(req.session.flag == 3) {
        req.session.destroy()
        res.render('registration-form', { title: 'CodeLanguage', message : 'Confirm Password Does not Match', flag : 0 })
    } else if(req.session.flag == 4) {
        req.session.destroy()
        res.render('registration-form', { title: 'CodeLanguage', message : 'Incorrect Email or Password', flag : 1 })
    } else {
        res.render('registration-form', { title: 'CodeLanguage', message : '' })    
    }*/
    res.render('registration-form', {title: 'Registration', isReg: true})
})

// Handle POST request for user Registration 
router.post('/register', function(req, res, next) {

    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const cpassword = req.body.cpassword;
    //const cpassword = req.body.cpassword;

   // if( password ) {

        const sql = 'SELECT * FROM user WHERE email =?'
        conn.query(sql, [email], function (err, result, fields) {
            if(err) throw err
            
            if(result.length > 1 ) {
                //req.session.flag = 1
                res.redirect('/register', {message: 'That email already exist'})
            } else if(cpassword != password) {
                console.log('is not matched')
            } else {

                const sql = 'INSERT INTO user(username, email, password, cpassword) values(?,?,?,?)'

                conn.query(sql, [username, email, password, cpassword], function (err, result, fields) {
                    if (err) throw err;
                    //req.session.flag = 2
                    res.redirect('/')
                })
                console.log('success')
            }
            res.render('registration-form')
        })
    

    /*} else {
        //req.session.flag = 3
        console.log("Err")
        res.redirect('/register')
    }*/

})

//Login GET
router.get('/', function(req, res, next) {
    res.render('login-form', {title: 'Login', isLogin: true});
  });

//Handle POST request for User Login
router.post('/', async (req, res, next) => {
    
    const email = req.body.email;
    const password = req.body.password;

    console.log(req.body.email)
    console.log(req.body.password)
    
    const sql = 'SELECT * FROM user WHERE email =? AND password =?'
    
    conn.query(sql, [email, password], function (err, result, fields) {
        if(err) throw err
        // if user not found
        
        if(result.length > 0) {
            req.session = email 
            res.redirect('/home')
            console.log("Access")
        } else {
            res.render('login-form', {message: "Your Email Address or password is wrong"})
            console.log("Haven't access")
        }

    })

})

//Route for Dashboard
router.get('/dashboard', function(req, res, next) {
    res.render('dashboard', /*{message: 'Welcome, ' + req.session.email}*/)
})

router.get('/logout', function(req, res, next) {
    
        delete req.session

    res.redirect('/')
  });


module.exports = router;

/*const router = require("express").Router();
const {
  createUser,
  login,
  getUserByUserId,
  getUsers,
  updateUsers,
  deleteUser
} = require("../controllers/user.controller");
router.get("/login", getUsers);//++
router.post("/register", createUser)//+
//router.get("/login/:id", getUserByUserId)//+
router.post("/login", login)
router.patch("/update", updateUsers)//--
router.delete("/delete", deleteUser)

module.exports = router*/