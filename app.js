// Packages
var restify = require('restify')
  , qrCode = require('qrcode')
  , properties = require('./properties')

// Color log
var red = '\033[31m'
  , blue = '\033[34m'
  , green = '\033[32m'

// Create Server
var server = restify.createServer()

server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

// Index route
server.get('/', function (req, res, next) {
  res.write(properties.name + ' generator')
  res.end()
  return next()
})

// Version 1 Api Route
server.get('/v1/', function (req, res, next) {
  res.write(properties.name + ' Api Version 1')
  res.end()
  return next()
})

server.get('/v1/:format', function (req, res, next) {
  if(req.params.data !== undefined) {

    console.log(green + properties.name + ' -- request for ' + req.params.data)

    // We create our QR Code
    createQRCode(req, function (err, base64Image) {

      if(!err) {

        // Convert the base64Image to a buffer
        // and remove the Mime type and encoding
        var image = new Buffer(base64Image.substring(22), 'base64')

        // Send out buffer back
        res.setHeader('Content-Type', 'image/png')
        res.setHeader('Content-Length', image.length)
        res.write(image)
        res.end()

        console.log(green + properties.name + ' -- QRCode generated')
        return next()

      } else {
        console.log(red + properties.name + ' -- ERROR: ' + err)
        throw new Error(err)
      }
    })

  } else {
    throw new Error('Error: POST data is invaild')
  }
})

// Generate QRCode
function createQRCode(req, callback) {
  qrCode.toDataURL(req.params.data, callback)
}

// Starting Listening
server.listen(properties.port, function () {
  console.log(blue + properties.name + ' -- Starting')
  console.log(blue + properties.name + ' -- Listening at ' + properties.url + ':' + properties.port)
})
