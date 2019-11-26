const express = require('express')
const { getDB } = require('../../config/db')
const router = express.Router()
const auth = require('../../middleware/auth')

// @route GET api/bot
// @desc Get bot description
// @access Private
router.get('/', auth, async function(req, res, next) {
  try{
    const doc = await getDB().collection('bot').findOne({abbreviation: process.env.ABBREVIATION})
    res.send(doc)
  } catch (e) {
    res.send('No entries found')
  }
});

module.exports = router;
