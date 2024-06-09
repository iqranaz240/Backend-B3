const express = require('express')
const router = express.Router()
const cont = require('../controllers/getRoutes')
const { verifyToken, checkAdmin, checkValidUser } = require('../middlewares/auth')

router.get('/', cont.getRequest)

router.post('/signup', cont.signup)
router.post('/login', cont.login)
router.get('/getUsers', checkAdmin, cont.getUser)
router.get('/getUserByEmail', checkValidUser, cont.getUserByEmail)
router.delete('/deleteUserByEmail', checkValidUser, cont.deleteUserByEmail)
router.patch('/updateUserByEmail', checkValidUser, cont.updateUserByEmail)

module.exports = router