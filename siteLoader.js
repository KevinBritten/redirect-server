const fs = require('fs')

const localIP = Object.values(require("os").networkInterfaces())
.flat()
.filter(({ family, internal }) => family === "IPv4" && !internal)
.map(({ address }) => address)
let [node, program, url, ...options] = process.argv
const port = '3000'
url = !url.includes('http') && !options.includes("--nohttps") ?  'https://' + url : url


const data = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <script type="text/javascript"> 
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