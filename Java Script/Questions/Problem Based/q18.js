// Write a function if character is UpperCase or LowerCase


const isUpperCase = (char) =>{
    if(char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) return true
    return false
}


console.log(isUpperCase('x'))
console.log(isUpperCase('A'))
console.log(isUpperCase('X'))
