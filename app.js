// ===== MODULES ===============================================================
const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')

// ===== MESSENGER =============================================================
const ThreadSetup = require('./routes/messenger_api_helper/thread-setup')

// ===== ROUTES ================================================================
const indexRouter = require('./routes/index')
const usersRouter = require('./routes/users')
const underwritingAPI = require('./routes/api/underwriting')
const botAPI = require('./routes/api/bot')
const userAPI = require('./routes/api/users')
const authAPI = require('./routes/api/auth')
const flowAPI = require('./routes/api/flow')
const gatewayRouter = require('./routes/gateway')

// ===== MODULES ===============================================================
const { connectDB } = require('./config/db')
connectDB()

const app = express()
/* =============================================
   =           Basic Configuration             =
   ============================================= */

/* ----------  Views  ---------- */
// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

/* ----------  Static Assets  ---------- */
if(process.env.NODE_ENV === 'production'){
  console.log('RUNNING PRODUCTION BUILD')
  app.use(express.static(path.join(__dirname, 'client/build')))
  app.get("*", (req, res)=>{
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
} else{
  // console.log('RUNNING DEV BUILD')
  // app.use(express.static(path.join(__dirname, 'public')))
  app.use(express.static(path.join(__dirname, 'client/build')))
  app.get("*", (req, res)=>{
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}


/* ----------  Parsers  ---------- */
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

/* ----------  Loggers  ---------- */
app.use(logger('dev'))

/* =============================================
   =                   Routes                  =
   ============================================= */

/* ----------  Messenger setup  ---------- */
ThreadSetup.setDomainWhitelisting();

/* ----------  Primary / Happy Path  ---------- */
// app.use('/', indexRouter)
app.use('/users', usersRouter)
app.use('/gateway', gatewayRouter)

/* ----------  API Routes  ---------- */
app.use('/api/underwriting', underwritingAPI)
app.use('/api/bot', botAPI)
app.use('/api/users', userAPI)
app.use('/api/flows', flowAPI)
app.use('/api/auth', authAPI)

/* ----------  Errors  ---------- */
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
