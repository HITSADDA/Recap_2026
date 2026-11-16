function fizzbuzz(min, max) {
    if (min >= max) return []
    let arr = [];
    for (let i = min; i <= max; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            arr.push('fizzbuzz');
            continue
        }
        else if (i % 3 === 0) {
            arr.push('fizz')
            continue
        }
        else if (i % 5 === 0) {
            arr.push('buzz')
            continue
        } else {
            arr.push(i)
        }
    }
    return arr;
}

console.log(fizzbuzz(3, 65));
