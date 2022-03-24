const express = require('express');
const router = express.Router();
const category = require('../controllers/categoryController')

router.post('/', category.add)
router.put('/:id', category.update)
router.delete('/:id', category.delete)
router.get('/:id', category.get_id)
router.get('/', category.get_all)

module.exports = router;