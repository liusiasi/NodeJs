module.exports.test = 'B';

const modA = require("./04_modA");

console.log("modB: " , modA.test);

module.exports.test = 'BB';
