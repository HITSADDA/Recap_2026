// Remove Duplicate without changing the order of the element

function removeDuplicate(arr){
    const count = {}

    return arr.map((item)=>{
        if(!count[item]){
            count[item] = 1;
            return item
        }
        return null
    }).filter((i)=> i !== null)
}

console.log(removeDuplicate([12, 44, 1, 12, 1, 23, 44, 1]))