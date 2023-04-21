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
- **port** - By default this is `3000`.
- **version** - Version of api you are working with only `v1` at the momment.
- **format** - Type of QR Code you wish to be generated. Only `qr`.
- **data** - Add `data=` with string you wish to encode into the QRCode

### Example Link
[http://qrgen.clockte.ch/v1/qr?data=http://www.example.com](http://qrgen.clockte.ch/v1/qr?data=http://www.example.com)

A .png image is then returned

## Dependencies

- Qrcode
- Restify

## Dev-Dependencies

- Mocha
- Should
- Request

## Author
[Josh Wilson](https://github.com/joshwlsn/)

## License
Licensed under the [MIT](http://opensource.org/licenses/mit-license.php)

[View the source on GitHub](https://github.com/clocklimited/qrgen)
