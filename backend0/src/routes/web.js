const express = require('express')
const { getHomepage, getCreatepage, postCreateUser, getEditpage, postEditUser, postDeleteUser } = require('../controllers/homeController')
const router = express.Router()

router.get('/', getHomepage)
router.get('/create', getCreatepage)
router.post('/create-user', postCreateUser)
router.get('/edit/:userId', getEditpage)
router.post('/edit-user', postEditUser)
router.post('/delete-user/:userId', postDeleteUser)

module.exports = router