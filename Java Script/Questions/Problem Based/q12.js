const removeDuplicate = (arr) => {
    return Array.from(new Set(arr))
}

const removeDuplicate2 = (arr) => {
    arr = arr.sort()
    return arr.map((val, i) => val !== arr[i-1] ? val: null).filter((val)=>val !== null)
}

// console.log(removeDuplicate([12, 13, 13, 13, 15]))
console.log(removeDuplicate2([12, 13, 13, 13, 15]))