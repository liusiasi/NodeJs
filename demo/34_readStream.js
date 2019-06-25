const fs = require('fs');

const rs=fs.createReadStream('./34_readStream.js');

rs.pipe(process.stdout);