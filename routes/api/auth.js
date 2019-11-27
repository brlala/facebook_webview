const express = require('express')
const { getDB, ObjectID } = require('../../config/db')
const router = express.Router()
const auth = require('../../middleware/auth')
const jwt = require('jsonwebtoken')
const { check, validationResult } = require('express-validator')

// @route GET api/auth
// @desc Get bot description
// @access Private
router.get('/', auth, async(req, res) => {
  try{
    const user = await getDB().collection('bot_user').findOne({_id: ObjectID(req.user.id)})
    res.json(user)
  } catch (e) {
    console.log(e)
    res.status(500).send('Server error')
  }
});

// @route POST api/auth
// @desc Authenticate User and get token
// @access Public
router.post('/', [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const { email, password } = req.body
    try {
      let user = await getDB().
        collection('bot_user').
        findOne({ 'email': email, 'chatbot.agent_code': password })
      if (!user) {
        return res.status(400).
          json({ errors: [{ msg: 'Invalid Credentials' }] })
      }
      const payload = {
        user: {
          id: user._id,
        },
      }

      jwt.sign(
        payload,
        process.env.jwtSecret,
        { expiresIn: 3600000 },
        (err, token) => {
          if (err) throw err
          res.json({ token })
        })
    } catch (e) {
      console.error(e.message)
      res.status(500).send('Server error')
    }
  })

module.exports = router;
