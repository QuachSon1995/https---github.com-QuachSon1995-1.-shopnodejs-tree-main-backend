const express = require('express');
const router = express.Router();
const category = require('../controllers/categoryController')

router.post('/add-category', category)
router.update('/:id', category)
router.delete('/:id', category)
router.get('/:id', category)
router.get('/', category)

module.exports = router;