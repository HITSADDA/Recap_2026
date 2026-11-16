// Write a function to reverse a string without an built-in function


const reverseStr = (str) => {
    let rev = ''

    for (let i = str.length - 1; i >= 0; i--) {
        rev += str[i]
    }

    return rev
}

console.log(reverseStr('How to become a laier'))