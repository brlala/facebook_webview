const auth = require('../../middleware/auth')
const { getDB } = require('../../config/db')
const express = require('express')
const router = express.Router()

// @route GET api/underwriting
// @desc Test Getting Main Category for underwriting
// @access Private
router.get('/', async function (req, res, next) {
  try {
    const doc = await getDB().collection('taxonomy_underwriting').distinct("System")
    if(!doc){
      return res.status(400).send('No categories found.')
    }
    res.status(200).json(doc.sort())
  } catch (e) {
    return res.status(500).
      json({ errors: [{ msg: 'Server error' }] })
  }
})

// @route GET api/underwriting/:subcategory
// @desc getting underwriting subcategory
// @access Private
router.get('/:subcategory', auth,
  async function ({ params: { subcategory } }, res, next) {
    try {
      console.log(`GET Subcategory response: ${subcategory}`)
      const doc = await getDB().collection('taxonomy_underwriting').distinct('Medical Conditions', {"System" : subcategory})
      if(!doc){
        return res.status(400).send('No subcategory found.')
      }
      res.send(doc.sort())
    } catch (e) {
      return res.status(500).
        json({ errors: [{ msg: 'Server error' }] })
    }
  })

module.exports = router
