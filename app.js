// Packages
var express = require('express')
  , morgan = require('morgan')
  , qrCode = require('qrcode')
  , properties = require('./properties')
  , marked = require('marked')
  , fs = require('fs')
  , join = require('path').join
  , app = express()
  , UberCache = require('uber-cache')
  , cache = new UberCache(1000)
  , uberMemoize = require('uber-memoize')
  , memoize = uberMemoize('QR', cache)
  , createQr = memoize(qrCode.toDataURL, 10 * 60000)

app.use(morgan('combined'))

// Index route
app.get('/', function (req, res, next) {
  fs.readFile(join(__dirname, '/Readme.md'), 'utf-8', function (err, data) {
    if (err) return next(err)
    res.write(marked.parse(data))
    res.end()
  })
})

// Version 1 Api Route
app.get('/v1/', function (req, res, next) {
  res.write(properties.name + ' Api Version 1')
  res.end()
  return next()
})

app.get('/v1/:format', function (req, res, next) {

  // Check format
  if (req.params.format !== 'qr') {
    return next(new Error('Incorrect format type'))
  }

  // Check data
  if (req.query.data === undefined) {
    return next(new Error('GET data is missing'))
  }

  // We create our QR Code
  createQr(req.query.data, function (err, base64Image) {
    if (err) return next(err)

    var image = new Buffer(base64Image.substring(22), 'base64')

    // Return buffer
    res.set({ 'Content-Type': 'image/png', 'Content-Length': image.length })
    res.write(image)
    res.end()
  })
})

// Starting Listening
app.listen(properties.port, function () {
  console.log(properties.name + ' starting on ' + properties.port)
})
