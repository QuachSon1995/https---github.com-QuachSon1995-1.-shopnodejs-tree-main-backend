const express = require('express');
const router = express.Router();
const product = require('../controllers/productController')

router.post('/add-product', product)
router.update('/:id', product)
router.delete('/:id', product)
router.get('/:id', product)
router.get('/', product)

module.exports = router;