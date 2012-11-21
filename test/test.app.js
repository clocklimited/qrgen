// Packages
var http = require('http')
  , properties = require('../properties')

// Post function to send data to api
function postAction(query) {

  if(query) {
    query = '?data=' + query
  }

  var options = {
    host: properties.url,
    path: '/v1/qr' + query,
    port: properties.port,
    method: 'POST'
  }

  var callback = function(response) {
    var str = ''
    response.on('data', function (chunk) {
      str += chunk
    });

    response.on('end', function () {
      console.log(str)
    })
  }

  var req = http.request(options, callback)
  req.write();
  req.end();
}

// Mocha Tests
describe('app.js', function() {
    it('should error with POST data is missing', function() {
      var error
      error.postAction().should.throwError('Error: POST data is missing')
    })

})
