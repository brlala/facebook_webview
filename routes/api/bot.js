const express = require('express')
const { getDB } = require('../../config/db')
const router = express.Router()
const auth = require('../../middleware/auth')
const abbreviation = process.env.ABBREVIATION

// @route GET api/bot
// @desc Get bot description
// @access Private
router.get('/', auth, async function (req, res, next) {
  try {
    const doc = await getDB().collection('bot').findOne({ abbreviation })
    if (!doc) {
      return res.status(400).
        json(
          { errors: [{ msg: `There is no bot entry for "${abbreviation}"` }] })
    }
    res.send({...doc})
  } catch (e) {
    return res.status(500).
      json({ errors: [{ msg: `Server Error` }] })
  }
})

module.exports = router
