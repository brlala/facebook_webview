const express = require('express')
const { getDB } = require('../../config/db')
const router = express.Router()
const auth = require('../../middleware/auth')
const abbreviation = process.env.ABBREVIATION

// @route GET api/flows/
// @desc Get bot description
// @access Private
router.get('/', auth, async function (req, res, next) {
  try {
    const doc = await getDB().collection('flow').find({}).toArray()
    res.send(doc)
  } catch (e) {
    console.log(e)
    return res.status(500).
      json({ errors: [{ msg: `Server Error` }] })
  }
})

// @route GET api/flows/:flowName
// @desc returns the flow document
// @access Private
router.get('/:flowName', auth, async function ({params: {flowName}}, res, next) {
  try {
    const doc = await getDB().collection('flow').findOne({ name: "Microapp Underwriting - Guide" })
    if (!doc) {
      return res.status(400).
        json(
          { errors: [{ msg: `There is no flow found for "${flowName}"` }] })
    }
    res.send(doc)
  } catch (e) {
    return res.status(500).
      json({ errors: [{ msg: `Server Error` }] })
  }
})

module.exports = router
