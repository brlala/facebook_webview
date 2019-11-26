module.exports = function (req, res, next) {
  // Get token
  const token = req.header('x-auth-token')

  //Check if no token
  if (!token) {
    return res.status(401).json({msg: 'No token, authorization denied'})
  }

  // Verify token
  try {
    const decoded = null
  } catch (e) {
    res.status(401).json({msg: 'Token is not valid'})
  }
}