const express = require('express')
const router = express.Router()
const User = require('../models/Contact')


router.get('/', (req,res) => {
    res.render('Contact')
})

router.post('/Contact', (req,res) => {
    let data = new User(req.body)
    data.save()

    .then(item => {
        res.redirect('/msg')
    
    }).catch(() => {
        res.status(400).send('database not working')
    })
})


module.exports = router;