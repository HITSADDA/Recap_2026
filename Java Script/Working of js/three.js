console.log("Start of the Script")


setTimeout(() => {
    console.log("Timer Started")
}, 0)

Promise.resolve().then(()=>{
    console.log("Promise Resolved (Promise)")
})

console.log("END")