const express = require('express')
const router = express.Router()
const cont = require('../controllers/getRoutes')

router.get('/', cont.getRequest)

router.post('/createUser', cont.postRequest)
router.get('/getUser', cont.getUser)

module.exports = router