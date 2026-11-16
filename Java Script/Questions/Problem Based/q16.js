// Find Minimun number out of array

const findMin = (arr) =>{
    return arr.reduce((acc, cur)=> acc < cur? acc : cur)
}

const findMin2 = (arr) =>{
    return arr.sort((a, b) => a - b)[0]
}


// const findMax = (arr) =>{
//     console.log(arr.sort((a, b) => b - a));
//     return arr.sort((a, b) =>b - a)[0]
// }

console.log(findMin2([13, 12, 11, 5, 55]))