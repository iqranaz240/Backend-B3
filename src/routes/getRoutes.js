const express = require('express')
const router = express.Router()
const cont = require('../controllers/getRoutes')

router.get('/', cont.getRequest)

router.post('/createUser', cont.postRequest)
router.get('/getUsers', cont.getUser)
router.get('/getUserByEmail', cont.getUserByEmail)
router.delete('/deleteUserByEmail', cont.deleteUserByEmail)
router.patch('/updateUserByEmail', cont.updateUserByEmail)


module.exports = router