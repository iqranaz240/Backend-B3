const express = require('express')
const router = express.Router()
const cont = require('../controllers/getRoutes')

router.get('/', cont.getRequest)
router.get('/new', cont.newRequest)
router.get('/old', cont.oldRequest)
router.post('/getUser', cont.postRequest)

module.exports = router