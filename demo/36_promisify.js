const fs =require('fs');
const promisify = require('util').promisify;

const read = promisify(fs.readFile);

read('./36_promisify.js').then(data => {
  console.log(data);
}).catch(ex => {
  console.log(ex);
})

async function test() {
  try{
    const content =  await read('./36_promisify.js');
    console.log(content);
  }
  catch(ex){
    console.log(ex);
  }
}
test();