const express = require('express');
const { bubbleSort, filterEven, sumList, binarySearch } = require('../controllers/operationsController');
const router = express.Router();

router.post('/sort', bubbleSort);
router.post('/filter/even', filterEven);
router.post('/sum', sumList);
router.post('/search', binarySearch);

module.exports = router;
