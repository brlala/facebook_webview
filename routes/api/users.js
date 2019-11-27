const express = require('express')
const { getDB } = require('../../config/db')
const { check, validationResult } = require('express-validator')
const jwt = require('jsonwebtoken')
const router = express.Router()

// @route POST api/users
// @desc Get Check if user exists
// @access Public
router.post('/', [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Please enter a password of 6 or more characters').
      isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const { name, email, password } = req.body
    try {
      let user = await getDB().
        collection('bot_user').
        findOne({ first_name: name, 'facebook.id': password })
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

module.exports = router
