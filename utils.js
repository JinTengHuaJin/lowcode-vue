const fs = require('fs');
const path = require('path');
// read the file address
const filePath = path.resolve('./src/assets/icon');
// collect all picture name
fs.readdir(filePath, (err, files) => {
  let pngNames = files.reduce((pre, fil) => {
    if(fil.includes('.png')) {
      pre.push(fil.replace('.png', ''));
    }
    return pre;
  }, []);
  console.log(pngNames, 'pngNames');
});
