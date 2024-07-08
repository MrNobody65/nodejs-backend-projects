const express = require('express')
const { getHomepage, getabc } = require('../controllers/homeController')
const router = express.Router()

router.get('/', getHomepage)
router.get('/abc', getabc)

module.exports = router