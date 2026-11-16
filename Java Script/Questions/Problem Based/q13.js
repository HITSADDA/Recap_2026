let text = "Pikachu do you like Apple"


function vowelCount(text) {
    let count = 0;
    text = text.toLowerCase()
    text.split("").forEach((val) => {
        if (val === 'a' || val === 'e' || val === 'i' || val === 'o' || val === 'u') {
            count++
        }
    })
    return count
}

function vowelCount2(text) {
    let count = 0;
    let vowels = ['a', 'e', 'i', 'o', 'u']
    for (let char of text) {
        if (vowels.includes(char.toLowerCase())) {
            count++
        }
    }
    return count
}

console.log(vowelCount2('catbatmate'))