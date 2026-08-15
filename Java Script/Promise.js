function makeAPromise(isAdult){
    const myPromise = new Promise((res, rej)=>{
        if(isAdult){
            console.log("Resolved")
            res()
        }else{
            rej('you are wrong')
        }
    })

    myPromise.then(()=>{
        console.log("You are an adult")
    }).catch((err)=>{
        console.log(err)
    })
}


makeAPromise(false)