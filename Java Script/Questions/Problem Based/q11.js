// find sum of digits


const sumOfDigits = (digits) =>{
    if(digits) return Number(String(digits)[0]) + sumOfDigits(Number(String(digits).slice(1)))
    return 0
}


console.log(sumOfDigits(1234))
console.log(sumOfDigits(12345))