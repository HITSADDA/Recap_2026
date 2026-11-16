// Find Sum square of all numbers

const sumOfSquare = (arr) =>{
    return arr.reduce((acc, curr)=> (acc = acc + (curr * curr)), 0)
}

console.log(sumOfSquare([5, 4, 3]));