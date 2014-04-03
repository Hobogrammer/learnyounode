var fs = require('fs');

var str;

str = fs.readFileSync(process.argv[2]);

str_array = str.toString().split(/\n/);

console.log(str_array.length - 1);
