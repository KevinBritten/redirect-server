'use strict';

const port = '3000'
var localIP = Object.values(require("os").networkInterfaces())
.flat()
.filter(({ family, internal }) => family === "IPv4" && !internal)
.map(({ address }) => address)


const { networkInterfaces } = require('os');
const fs = require('fs')

const nets = networkInterfaces();
// const results = Object.create(null); // Or just '{}', an empty object

// function setIP() {

//   for (const name of Object.keys(nets)) {
//       for (const net of nets[name]) {
//           // Skip over non-IPv4 and internal (i.e. 127.0.0.1) addresses
//           if (net.family === 'IPv4' && !net.internal) {
//               if (!results[name]) {
//                   results[name] = [];
//               }
//               results[name].push(net.address);
//           }
//       }
//   }
//   localIP = results["en0"][0]

// }

// setIP()

let url = process.argv[2].includes('http') ? process.argv[2] : 'https://' + process.argv[2]


const data = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <script type="text/javascript">
    window.close('openedSite')
      window.open('${url}', 'openedSite');
    </script>
    <title>redirect</title>
  </head>
  <body>
    <div id="app"></div>
    <h1></h1>
    <script src="/dist/build.js"></script>
  </body>
</html>`

fs.writeFile('index.html', data, (err) => {
    if (err) throw err;
    // console.log('Loading your site...');
    console.log('Loading ' + '\x1b[33m', url, "\x1b[0m");
    console.log('Open the following address on any device you want to display the page: ' + '\x1b[32m',
   `
  ${localIP}:${port}`, "\x1b[0m")
  });