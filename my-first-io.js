const fs = require('fs');
var file = fs.readFileSync(process.argv[2])
var Nblines = file.toString().split('\n').length - 1
console.log(Nblines)