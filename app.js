// Packages
var restify = require('restify')
  , qrCode = require('qrcode')
  , properties = require('./properties')
  , markdown = require('github-flavored-markdown').parse
  , fs = require('fs')

// Create Server
var server = restify.createServer()

server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

// Index route
server.get('/', function (req, res) {
  fs.readFile(__dirname + '/Readme.md', 'utf-8', function (err, data) {
    res.write(markdown(data))
    res.end()
  })
})

// Version 1 Api Route
server.get('/v1/', function (req, res, next) {
  res.write(properties.name + ' Api Version 1')
  res.end()
  return next()
})

server.get('/v1/:format', function (req, res, next) {
  if(req.params.data !== undefined) {

    console.log(properties.name + ' -- request for ' + req.params.data)

    // We create our QR Code
    createQRCode(req, function (err, base64Image) {

      if(!err) {

        // Convert the base64Image to a buffer
        // and remove the Mime type and encoding
        var image = new Buffer(base64Image.substring(22), 'base64')

        // Return buffer
        res.setHeader('Content-Type', 'image/png')
        res.setHeader('Content-Length', image.length)
        res.write(image)
        res.end()

        console.log(properties.name + ' -- QRCode generated')
        return next()

      } else {
        console.log(properties.name + ' -- ERROR: ' + err)
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
  console.log(properties.name + ' -- Starting')
  console.log(properties.name + ' -- Listening at ' + properties.url + ':' + properties.port)
})
