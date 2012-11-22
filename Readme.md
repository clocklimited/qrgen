# QRGen
A node.js application which generates QR Codes and returns it as a .png image

## Installation
Create the application:
  git clone https://github.com/clocklimited/qrgen

Install dependencies
  npm install

## Getting QR Code

### Url

Submit POST request to:
```
http://[hostname]:port/[version]/[format]?=[data]
```
- **hostname** - If your on a local machine, this would be `localhost`
- **port** - By default this is `3000`.
- **version** - Version of api you are working with only `V1` at the momment.
- **format** - Type of QR Code you wish to be generated. Only `qr`.
- **data** - Add `?data=` with string you wish to encode into the QRCode

A .png image is then returned

## Author
[Josh Wilson](mailto:josh.wilson@clock.co.uk)
