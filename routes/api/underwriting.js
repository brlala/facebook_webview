const express = require('express')
const router = express.Router()

// @route GET api/underwriting
// @desc Test route
// @access Public
router.get('/', function(req, res, next) {
  res.send('Underwriting API route');
});

module.exports = router;
