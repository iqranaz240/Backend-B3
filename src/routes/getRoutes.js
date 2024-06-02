const express = require('express')
const router = express.Router()
const cont = require('../controllers/getRoutes')

router.get('/', cont.getRequest)

router.post('/signup', cont.signup)
router.post('/login', cont.login)
router.get('/getUsers', cont.getUser)
router.get('/getUserByEmail', cont.getUserByEmail)
router.delete('/deleteUserByEmail', cont.deleteUserByEmail)
router.patch('/updateUserByEmail', cont.updateUserByEmail)


module.exports = router