const { Router } = require('express')
const router = Router()

router.get('/home', (req, res) => {
    res.render('index')
})


module.exports = router