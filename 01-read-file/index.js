const path = require('path');
const fs = require('fs');
const fPath = path.join(__dirname, 'text.txt');
const readStream = fs.createReadStream(fPath, 'utf-8');
readStream.on('data', text => console.log(text));