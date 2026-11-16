// Write a function to find maximum vlaue out of list on numbers


function findMaximum(nums){
    if(!nums.length) return false
    return nums.reduce((acc, curr)=> acc > curr? acc : curr)
}


console.log(findMaximum([12, 3, 234, 12, 0]))
console.log(findMaximum([12, 3, -234, 12, 0]))
console.log(findMaximum([-5, -1, -3, -2]))
console.log(findMaximum([]))
