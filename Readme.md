# QRGen
A node.js application which generates QR Codes and returns it as a .png image

## Installation
Create the application:
  git clone http://github.com/joshwlsn/qrgen.git

Install dependencies
  npm install

## Getting QR Code

### Url

Submit POST request to:
```
http://[hostname]:port/[version]/[format]/
```
- **hostname** - If your on a local machine, this would be `localhost`
- **port** - By default this is `3000`.
- **version** - Version of api you are working with only `V1` at the momment.
- **format** - Type of QR Code you wish to be generated. Only `qr`.

### Post Data

```
{ url: "http://www.example.com"
, name: "Example"
}
```

A .png image is then returned

## Author
[Josh Wilson](http://github.com/joshwlsn)
