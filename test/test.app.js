// Packages
var request = require('request')
  , properties = require('../properties')

// Mocha Tests
describe('app.js', function() {

    it('should error with POST data is missing', function() {
      request(properties.url + ':' + properties.port + '/qr', function (error, response, body) {
        body.should.be.equal('Error: POST data is missing')
      })
    })

    it('should error with 500 status code', function() {
      request(properties.url + ':' + properties.port + '/qr', function (error, response, body) {
        body.should.be.equal('500')
      })
    })

    it('should return with 200 status code', function() {
      request(properties.url + ':' + properties.port + '/qr?data=http://www.example.com', function (error, response, body) {
        body.should.be.equal('200')
      })
    })

    it('should return with correct base64 Image', function() {
      request(properties.url + ':' + properties.port + '/qr?data=http://www.example.com', function (error, response, body) {

        // Contorl Data for http://www.example.com
        var controlData = 'iVBORw0KGgoAAAANSUhEUgAAAJwAAACcCAIAAAAF2lUaAAAABmJLR0QA/wD/AP+gvaeTAAADVklEQVR4nO3dwYrrMBBE0efH/P8vZ3aDsxCo6S5bXO5ZDo7jSdE0siX5+nw+/8Ty/+0L0DxDBTJUIEMFMlQgQwUyVCBDBTJUIEMFMlQgQwUyVCBDBTJUIEMFMlQgQwUyVKCfzoev65q6jj+rOVP376oes/P3nevpnKeqM3fMSgUyVCBDBWr11LtOD6j2ts5nq7252i/Tv8MOKxXIUIEMFWisp951emTC6npW/bXTv6vHJ34HKxXIUIEMFSjSU59U7X9T941PZqUCGSqQoQId3VNP62enXc+KlQpkqECGChTpqVP9pjNenBq/drzVd61UIEMFMlSgsZ6amPvamcfbma/bmd+b+B2qrFQgQwUyVKDr5HuYO2PKqXlAp82r6rBSgQwVyFCBHp33++R6mNX5O+tqdv5+wvwmKxXIUIEMFeiIPR+qfWjq+Oq1pU31YCsVyFCBDBWo1VMTzxqn1oauPtsZ11Yl7lHvsFKBDBXIUIEiz1Orc3zS93VXEs9ZO/3YcaqWDBXIUIHi8347+/TufFdnXU3CVJ/usFKBDBXIUIFa49SpNS3V79qRWGPTWfP65JwmKxXIUIEMFei1tTRTfWh1zsQc453jd76r8z/usFKBDBXIUIFeW0uT2Ke+Mx84cQ3OUdIYQwUyVKCxcepbY8Sqt+7xVs/vOFVfDBXIUIGO2EN/ah+GHYl1MtVjqu+Yq7JSgQwVyFCBHp2jtHOelamx7470fsLpZ9hWKpChAhkqUHyO0pP7FHaO2bmGqe/dOd57v/piqECGCnTEe2nS83sT7y1fqfbaxDNjKxXIUIEMFWispyaeTU7Nv5065131nnb6OfGdlQpkqECGCnTEHvp36XnI1fendr7r7snnrFYqkKECGSrQEePUqbFg4v5qohfuXKfPU/XFUIEMFejRPR/upvYmfOt9pU/eQ66yUoEMFchQgY5Yn7rSGYNO9eCp95mnx6Z3ViqQoQIZKtDRPfVuapyXeE/OylQPrrJSgQwVyFCBIj11arxVnR+b2GsifbzjVG0xVCBDBTpifWpVYm5t593mb+2XtGKlAhkqkKECvfauN+VYqUCGCmSoQIYKZKhAhgpkqECGCmSoQIYKZKhAhgpkqECGCmSoQIYKZKhAhgpkqEC/IoQjdAT3NoYAAAAASUVORK5CYII='

        body.should.be.equal(controlData)
      })
    })

})
