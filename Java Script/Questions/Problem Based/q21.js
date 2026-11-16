// Calculate mean of a array


function calculateMenu(arr){
    if(!arr.length) return 0;
    return arr.reduce((acc, cur) => acc + cur) / arr.length
}

console.log(calculateMenu([12, -12, 3, 6]))