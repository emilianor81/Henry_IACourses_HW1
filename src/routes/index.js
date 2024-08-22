const express = require('express');
const router = express.Router();
const authRoutes = require('./auth'); 
const operationsRoutes = require('./operations'); 


router.use('/auth', authRoutes);
router.use('/operations', operationsRoutes);

module.exports = router;