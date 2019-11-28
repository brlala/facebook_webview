const auth = require('../middleware/auth')
const { getDB } = require('../config/db')
const express = require('express')
const axios = require('axios')

const router = express.Router()

// @route POST /gateway
// @desc Test posting to Gateway
// @access Private
router.post('/facebook', auth, async function (req, res, next) {
  const platform = 'facebook'
  let body = { ...req.body }
  const config = { headers: { 'Content-Type': 'application/json' } }
  try {
    const query = {
      'is_active': true,
      'abbreviation': process.env.ABBREVIATION,
      [platform]: { '$exists': true },
    }

    // getting Gateway URL
    const data = await getDB().collection('bot').findOne(query)
    const gatewayURI = data.outgoing.gateway_endpoint
    const botID = data.facebook.bot_platform_id
    body.entry[0].messaging[0].recipient = { id: botID }

    try {
      const test = await axios.post(`${gatewayURI}facebook/webhook/`, req.body,
        config)
      // res.redirect(`${gatewayURI}facebook/webhook/`)
      // res.send("good")
    } catch (e) {
      console.log(e)
      res.status(500).send('Server error')
    }
  } catch (e) {
    console.log(e)
    res.status(500).send('Server error')
  }
})

async function getGatewayURI (platform) {
  try {
    return await axios.get('/api/bot')
  } catch (e) {
    console.log(e)
    return
  }
}

module.exports = router
