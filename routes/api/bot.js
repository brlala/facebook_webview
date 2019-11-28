const express = require('express')
const { getDB } = require('../../config/db')
const router = express.Router()
const auth = require('../../middleware/auth')

// @route GET api/bot
// @desc Get bot description
// @access Private
router.get('/', auth, async function(req, res, next) {
  try{
    const abbreviation = process.env.ABBREVIATION
    const doc = await getDB().collection('bot').findOne({abbreviation: abbreviation})
    res.send(doc)
  } catch (e) {
    return res.status(400).
      json({ errors: [{ msg: `There is no bot entry for ${abbreviation}` }] })
  }
});

module.exports = router;
