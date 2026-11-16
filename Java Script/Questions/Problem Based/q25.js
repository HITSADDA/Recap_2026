// numbersRange -> Generate array with random numbers between a to b 


const numRange = (a, b, length = 5) =>{
    return Array.from({length}, ()=>(
        Math.round(Math.random() * (b - a + 1) + a)
    ))
}
const numRangeRecursive = (a, b, length = 5) =>{
    if(length === 0) return;
    return [Math.round(Math.random() * (b - a + 1) + a), ...numRange(a, b, length - 1)]
}

console.log(numRange(0, 5))
console.log(numRangeRecursive(-4, 5))