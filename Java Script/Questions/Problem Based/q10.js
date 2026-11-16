// Check if two function are equal or not

function compareArrs(arr1, arr2){
    if(arr1.length !== arr2.length) return false
    
    arr1 = arr1.sort()
    arr2 = arr2.sort()
    for(let i = 0; i< arr1.length; i++){
        if(arr1[i] !== arr2[i]) return false
    }
    return true
}


console.log(compareArrs([12, 15, 16, 12], [12, 16, 15, 12]))
console.log(compareArrs([], []))