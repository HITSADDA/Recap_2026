// Create a function takes a number as argument and returns true if number is power of 2

// Also with bitwise operator


// const isPowerOfTwo = (num) =>{
//     if(num %2) return false

//     let half = parseInt(num / 2);

//     for(let i = 0; i < half; i++){
//         let sum = 2 ** i;
//         if(sum === num){
//             return true
//         }
//     }
//     return false
// }

// console.log(isPowerOfTwo(12))
// console.log(isPowerOfTwo(16))


const isPowerOfTwoBitwise = (num) =>{
    for(let i = 1; i< num; i++){
        if((2 << i) === num) return true
        else if((2 << i) > num) return false
    }
}

console.log(isPowerOfTwoBitwise(16))
console.log(isPowerOfTwoBitwise(15))