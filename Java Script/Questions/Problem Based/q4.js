// Cheack type of triangle by its side


function typeOfTriangle(a, b, c){
    // equielator
    if(a === b && b === c && c === a) return "equielator"
    // isoscale
    else if (a === b  || b == c || c == a ) return "isoscale"
    // scalen
    else if (a !== b  || b !== c || c !== a ) return "scalen"
}

console.log(typeOfTriangle(12, 13, 14))
console.log(typeOfTriangle(12, 13, 12))
console.log(typeOfTriangle(12, 12, 12))