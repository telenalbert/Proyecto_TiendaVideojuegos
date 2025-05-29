const express = require('express');
const router = express.Router();
const CategoryController = require('../controllers/CategoryController')

router.post('/',CategoryController.create);
router.put('/:id',CategoryController.update);
router.delete('/:id', CategoryController.delete);
router.get('/:id', CategoryController.getById);

module.exports = router;