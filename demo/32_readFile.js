const fs = require('fs');
fs.readFile('./32_readFile.js', 'utf8', (err,data) => {
  if(err) throw err;
  console.log(data);
})
const data = fs.readFileSync('./04_main.js', 'utf8');
console.log(data);