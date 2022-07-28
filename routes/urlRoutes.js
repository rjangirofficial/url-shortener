const router = require('express').Router()
const Url = require('../model/urlModel')

router.get("/",(req, res) => {
    res.render('index')
})

router.post('/', async (req, res) => {
    const url = await Url.create({ full: req.body.longurl })
    res.render('index', { shortLink: `${req.headers.origin}/${url.short}` })
})

router.get('/:shorturl', async (req, res) => {
    const url = await Url.findOne({ short: req.params.shorturl })
    if (url) {
        res.redirect(url.full)
    } else {
        res.redirect('/')
    }
})

module.exports = router