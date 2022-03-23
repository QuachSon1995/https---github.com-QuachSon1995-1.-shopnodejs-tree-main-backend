const express = require('express');
const router = express.Router();
const customer = require('../controllers/customerController')

router.post('/add-customer', customer)
router.update('/:id', customer)
router.delete('/:id', customer)
router.get('/:id', customer)
router.get('/', customer)

module.exports = router;