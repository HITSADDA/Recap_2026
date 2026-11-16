// Truncate given string

function truncateStr(text, n){
    if(text.length < n) return text
    return `${text.slice(0, n + 1)}...`
}

console.log(truncateStr('Hii how are you my buddy', 5))