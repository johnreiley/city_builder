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
            let stateObj = countryObj.states.find(obj2 => obj2.name === obj.state);
            if (stateObj === undefined) {
                // build the new state
                countryObj.states.push({
                    name: obj.state,
                    cities: [{
                        name: obj.name,
                        population: Number(obj.population)
                    }]
                });
            } else {
                // build the new city
                stateObj.cities.push({
                    name: obj.name,
                    population: Number(obj.population)
                });
            }
        }
        return targetArray;
    }, []);

    return outputArray;
}

function sortArray(arrayToSort) {

    let sortedArray = arrayToSort.map(countryObj => {
        countryObj.states = countryObj.states.map(stateObj => {
            stateObj.cities = stateObj.cities.sort((city1, city2) => {
                if (city1.population >= city2.population) return 1;
                else return -1;
            });
            return stateObj;
        }).sort((state1, state2) => {
            if (state1.name >= state2.name) return 1;
            else return -1;
        });
        return countryObj;
    }).sort((country1, country2) => {
        if (country1.name >= country2.name) return 1;
        else return -1;
    });
    return sortedArray;
}

function logCountries(countries) {
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
    logCountries(outputArray);
    return outputArray;
}

module.exports = {
    main: main
};