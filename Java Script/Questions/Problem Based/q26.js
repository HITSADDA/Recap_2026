// Recursive function to get consecutive number in range from a to b



const consecutiveNums = (min, max) =>{
    if(min === max) return [max]
    return [min, ...consecutiveNums(min + 1, max)]
}

console.log(consecutiveNums(-2, 2));
