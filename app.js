//main file of server side
const bodyParser = require("body-parser")
const express = require('express')
const app = express()
const dbCon = require('./config/db.conn')
const cors = require('cors')
/*const session = ('express-session')
const flash = require('express-flash')
const expressValidator = require('express-validator')
const createError = require('http-errors');
const logger = require('morgan')
const bcrypt = require('bcrypt')
const passport = require('passport')
const fileUpload = require('express-fileupload')*/

// Initialize
/*app.use(passport.initialize())
app.use(passport.session())

//file upload lib
app.use(fileUpload())*/

//session
/*app.use(session({ 
  secret: '123456cat',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))*/


//hbs
const exhbs = require('express-handlebars')
const hbs = exhbs.create({
  defaultLayout: 'main',
  extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')


// import main routes
const MainRoutes = require('./routes/routes')
// import auth routes
const authRoutes = require('./routes/user.routes')
// import anime routes
const animeRoutes = require('./routes/anime.routes')
// import authors routes
const authorRoutes = require('./routes/author.routes')
// import genre routes
const genreRoutes = require('./routes/gener.routes')
// import studio routes
const studioRoutes = require('./routes/studio.routes')
// import manga routes
const mangaRoutes = require('./routes/manga.routes')
// import news routes
const newsRoutes = require('./routes/news.routes')
// import chat
const chatRoutes = require('./routes/chat.routes')
// new auth routes
const authRoutesnew = require('./routes/userauth.routes')

//parse request data
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


//auth routes
//app.use(authRoutes)
//anime routes
app.use(animeRoutes)
//main route
app.use(MainRoutes)
//author route
app.use(authorRoutes)
//genre route
app.use(genreRoutes)
//studio route
app.use(studioRoutes)
//manga route
app.use(mangaRoutes)
//news route
app.use(newsRoutes)
//chat
app.use(chatRoutes)
//new auth
app.use(authRoutesnew)

//connection
const port = 5000
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})