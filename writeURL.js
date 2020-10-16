const fs = require('fs')

let url = process.argv[2].includes('http') ? process.argv[2] : 'https://' + process.argv[2]

// if (process.argv[2].includes('http')) {
//     let url = process.argv[2]
// } else {
//     let url = 'https://' + process.argv[2]
// }

const data = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <script type="text/javascript">
      const site = '${url}';
      window.open(site);
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
    console.log(url);
  });