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
      population: Number(d["Population"])
    };
  });

  return input;
}

function makeOutput(output) {
  // How to output data, eg. to csv, to json, to console, etc.
  let jsonOutput = JSON.stringify(output);
  let savePath = process.argv[2]
    .slice(0, (process.argv[2].length - 3))
    .concat("json");

  fs.writeFileSync(savePath, jsonOutput);

  return;
}

function handleError(error) {
  console.error(error);
}

try {
  const input = getInput();
  const mainOutput = main(input);
  // ---------------------
  makeOutput(mainOutput);
} catch (error) {
  handleError(error);
}