const auth = require('../../middleware/auth')
const { getDB } = require('../../config/db')
const express = require('express')
const router = express.Router()

// @route GET api/underwriting
// @desc Test route
// @access Public
router.get('/', auth, async function (req, res, next) {
  try {
    const doc = await getDB().collection('panel_hospitals').distinct('State')
    res.send(doc)
  } catch (e) {
    res.send('No categories found')
  }
})

module.exports = router
