const coding = ["js", 'python', 'java', 'c#', "Rudy"]


// const find_java = coding.map((value) => value === 'java' && 'java')
// console.log(find_java)

// const no_java = coding.filter((value) => value !== 'java'? value: null)
// console.log(no_java)


const mynums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const result = mynums.reduce((prev, curr, currIdx, arr)=>{
    // prev -> Initially it is index 0, then return value of previous iteration
    // curr -> Initally it is index 1, then ++
    
    console.log(prev, curr, currIdx, arr)
    return curr * prev
})

console.log("multiple: ", result)