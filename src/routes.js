const express = require('express')
const router = express.Router()
const userController = require('./userController')
const game = require('./game')
const multigame = require('./multigame')
const html = require('./321.html')

router.get('/users', (req, res) => {
    userController.getUser
    return html
})
router.post('/users', userController.createUser)
router.put('/users/:id', userController.updateUser)
router.delete('/users/:id', userController.deleteUser)

router.get('/game', game.startgame)

router.get('/multigame', multigame.startgame)

module.exports = router;