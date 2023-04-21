# QRGen
A node.js application which generates QR Codes and returns it as a .png image

## Installation

### Create the application:
```
  git clone https://github.com/clocklimited/qrgen
```

### Install Pixman and Cairo

OSx 10.8
```
Install X11 from here: http://xquartz.macosforge.org/
brew install cairo
export PKG_CONFIG_PATH=$PKG_CONFIG_PATH:/opt/X11/lib/pkgconfig
```

Ubuntu
```
sudo apt-get install libpixman-1-dev libcairo2-dev
```

### Install dependencies
```
  npm install
```

## Getting QR Code

### Url

Submit GET request to:
```
http://[hostname]:port/[version]/[format]?=[data]
```
- **hostname** - If your on a local machine, this would be `localhost`
- **port** - By default this is `8080`.
- **version** - Version of api you are working with only `v1` at the moment.
- **format** - Type of QR Code you wish to be generated. Only `qr`.
- **data** - Add `data=` with string you wish to encode into the QRCode
- **width** - QR code width in pixels
- **scale** - Scale the QR code image - number of pixels per "block" (default 4)

### Example Link
[http://qrgen.clock.co.uk/v1/qr?data=http://www.example.com](http://qrgen.clock.co.uk/v1/qr?data=http://www.example.com)

A .png image is then returned

## Dependencies

- Qrcode

## Dev-Dependencies

- Mocha
- Should
- Request

## Author
[Clock Limited](https://github.com/clocklimited/)

## License
Licensed under the [MIT](http://opensource.org/licenses/mit-license.php)

[View the source on GitHub](https://github.com/clocklimited/qrgen)
