const {
  main
} = require('./main.js');
const fs = require('fs');
const d3 = require('d3-dsv');
const stripBom = require('strip-bom');

function getInput() {
  // Read in the file and turn the string into arary of city objects
  let input = fs.readFileSync(process.argv[2]).toString();
  stripBom(input);

  input = d3.csvParse(input, function (d) {
    return {
      country: d["Country Name"],
      state: d["State Name"],
      name: d["Name"],
      population: d["Population"]
    };
  });

  return input;
}

function makeOutput(output) {
  // How to output data, eg. to csv, to json, to console, etc.
  return;
}

function handleError(error) {
  console.error(error);
}

try {
  const input = getInput();
  const mainOutput = main(input);
  // ---------------------
  console.log(mainOutput);

  makeOutput(mainOutput);
} catch (error) {
  handleError(error);
}