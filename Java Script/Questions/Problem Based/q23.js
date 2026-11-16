// Find Count of each element in the array


function findCount(arr){
    const count = {}

    for(i = 0; i< arr.length; i++){
        if(count[arr[i]]){
            count[arr[i]] = count[arr[i]] + 1;
        }else{
            count[arr[i]] = 1;
        }
    }

    return count
}

console.log(findCount([12, 14, 12, 1, 13, 2, 55, 2, 1, 55]))