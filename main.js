/*************************************************************************
 * Converts an array of city objects into an array of country objects
 *************************************************************************/
function convert(inputArray) {
    let outputArray = inputArray.reduce(function (targetArray, obj) {
        let countryObj = targetArray.find(obj2 => obj2.name === obj.country);
        if (countryObj === undefined) {
            // build the new country
            targetArray.push({
                name: obj.country,
                states: [{
                    name: obj.state,
                    cities: [{
                        name: obj.name,
                        population: Number(obj.population)
                    }]
                }]
            });
        } else {
            let stateObj = countryObj.states.find(obj2 => obj2.name === obj.state)
            if (stateObj === undefined) {
                // build the new state
                countryObj.states.push({
                    name: obj.state,
                    cities: [{
                        name: obj.name,
                        population: Number(obj.population)
                    }]
                })
            } else {
                // build the new city
                stateObj.cities.push({
                    name: obj.name,
                    population: Number(obj.population)
                })
            }
        }
        return targetArray;
    }, []);

    return outputArray;
}

function sortArray(arrayToSort) {
    let sortedArray = arrayToSort.sort((a, b) => {
        a.states.sort((c, d) => {
            if (c.name >= d.name) return 1;
            else return -1;
        });
        if (a.name >= b.name) return 1;
        else return -1;
    });

    // TODO: Sort the cities!!

    return sortedArray;
}

function displayCountries(countries) {
    countries.forEach(country => {
        country.states.forEach(state => {
            state.cities.forEach(city => {
                console.log(`Name:${city.name}, Population:${city.population}`)
            })
        })
    });
}

function main(inputArray) {
    let outputArray = convert(inputArray);
    outputArray = sortArray(outputArray);
    displayCountries(outputArray);
    return outputArray;
}

module.exports = {
    main: main
};