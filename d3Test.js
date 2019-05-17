const fs = require('fs');
const d3 = require('d3-dsv');
const stripBom = require('strip-bom');
const csvData = fs.readFileSync(process.argv[2]).toString();
stripBom(csvData);
//console.log(csvData);
let objectArray = d3.csvParse(csvData);

const columns = objectArray.columns;
columnMax = (columns.length - 1)
columnCount = 0;

//console.log(objectArray);


// let targetArray = objectArray.reduce((acc, obj) => {

// }, []);