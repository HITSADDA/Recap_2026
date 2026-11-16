// Generate Hashtag from the given string and length must be less than 280

const text = "get ready with me"

function generateHastTag(text){
    const words = text.split(' ')
    return `#${words.reduce((acc, curr)=>{
        if(curr.trim() && acc.length < 280){
            return `${acc[0].toUpperCase()}${acc.slice(1)}${curr[0].toUpperCase()}${curr.slice(1)}`
        }
        return acc
    })}`
}

console.log(generateHastTag(text))