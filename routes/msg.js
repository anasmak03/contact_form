const express = require('express')
const router = express.Router()

router.get('/msg', (req,res) => {
    res.render('msg')
})
module.exports = router