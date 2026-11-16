// Write a function check if given string start with a specific sub string


const isStartsWith = (text, subStr) =>{
    return text.startsWith(subStr)
}

console.log(isStartsWith('abcd', 'bc'))