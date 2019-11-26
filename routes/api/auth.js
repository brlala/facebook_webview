const express = require('express')
const { getDB, ObjectID } = require('../../config/db')
const router = express.Router()
const auth = require('../../middleware/auth')

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

module.exports = router;
