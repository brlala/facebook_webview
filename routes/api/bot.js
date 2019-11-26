const express = require('express')
const { getDB } = require('../../config/db')
const router = express.Router()

// @route GET api/bot
// @desc Get bot description
// @access Public
router.get('/', async function(req, res, next) {
  try{
    const doc = await getDB().collection('bot').findOne({abbreviation: "gelmuat"})
    res.send(doc)
  } catch (e) {
    
  }
});

module.exports = router;
