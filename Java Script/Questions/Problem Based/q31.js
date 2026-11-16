// Calculate age


function whatIsMyAge(dob) {
    return Math.round((Date.now() - new Date(dob).getTime()) / (365 * 24 * 60 * 60 * 1000))
}

console.log(whatIsMyAge('2005-02-28'), 'years');
