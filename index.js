const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

function findMatching(array, name) {
    const matchingDrivers = array.filter(x => x.toLowerCase().includes(name.toLowerCase()));
    return matchingDrivers;
};

function fuzzyMatch(array, string) {
    const length = string.length;
    const matching = array.filter(y => y.slice(0, length) === string);
    return matching;
};

function matchName(array, nameInput) {
    const matchingDriverNames = array.filter(z => z.name === nameInput);
    return matchingDriverNames;
}
