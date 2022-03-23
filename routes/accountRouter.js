const express = require('express');
const router = express.Router();
const account = require('../controllers/accountController')

router.post('/login', account.login)
router.post('/', account.add)
// router.post('/logout', account)

module.exports = router;