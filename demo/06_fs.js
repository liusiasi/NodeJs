const fs = require('fs');
fs.readFile('./06_fs.js' , (err,data)=>{
  console.log(err);
  console.log(data.toString());
});