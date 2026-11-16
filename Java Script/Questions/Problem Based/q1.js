// Find the Longest character in the string


const str = "hii i am a javascript developer234"


function findLongestWord(text) {
    const words = text.split(' ')

    let result = {
        word: words[0],
        char: words[0].length
    }

    words.reduce((prev, now) => {
        if (!prev) {
            result.char = now.length
            result.word = now
            return now
        }
        else if (prev.length >= now.length) return prev
        else {
            result.char = now.length
            result.word = now
            return now
        }
    })

    return result;
}

console.log(findLongestWord(str))