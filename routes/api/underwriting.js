const auth = require('../../middleware/auth')
const { getDB } = require('../../config/db')
const express = require('express')
const router = express.Router()

// @route GET api/underwriting
// @desc Test Getting Main Category for underwriting
// @access Private
router.get('/', auth, async function (req, res, next) {
  try {
    const doc = await getDB().collection('panel_hospitals').distinct('State')
    res.send(doc)
  } catch (e) {
    return res.status(400).
      json({ errors: [{ msg: 'No categories found.' }] })
  }
})

// @route GET api/underwriting/:subcategory
// @desc getting underwriting subcategory
// @access Private
router.get('/:subcategory', auth,
  async function ({ params: { subcategory } }, res, next) {
    try {
      console.log(`GET Subcategory response: ${subcategory}`)
      const doc = await getDB().collection('panel_hospitals').distinct('Area', {"State" : subcategory})
      res.send(doc)
    } catch (e) {
      return res.status(400).
        json({ errors: [{ msg: 'No subcategories found.' }] })
    }
  })

module.exports = router
