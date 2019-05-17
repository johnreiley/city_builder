const fs = require('fs');
const d3 = require('d3-dsv');
const csvData = fs.readFileSync(process.argv[2]).toString();
let objectArray = d3.csvParse(csvData);
console.log(objectArray);