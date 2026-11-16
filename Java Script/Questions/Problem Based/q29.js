function convertArrToObj(arr){
    const obj = {}
    arr.forEach((val, idx)=>{
        obj[idx] = val
    })

    return obj
}


console.log(convertArrToObj([12, 123, 123, 123, 12, 11, 33, 55, 900, 43]))