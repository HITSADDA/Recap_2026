const toSnakeCase = (text) =>{
    return text.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`)
}

console.log(toSnakeCase('hello world toBro'))

const toCamelCase = (text) =>{
    return text.replace(/[_\s]+(.)/g, letter => `${letter.toUpperCase()}`)
}
console.log(toCamelCase('hello world to_bro'))

// 2:PP00