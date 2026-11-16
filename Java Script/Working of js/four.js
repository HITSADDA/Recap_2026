console.log("A")
console.log("B")

setTimeout(() => console.log('Timer executed'), 0)

const p1 = new Promise((res, rej) => {
    // for (let i = 1; i < 999000009999999; i++) {
    //     if (i === 999999990) {
    //         return res()
    //     }
    // }
    setTimeout(() => {
        return res()
    }, 3 * 1000)
})

p1.then(() => console.log('resolved')
).catch((e) => console.log(e))
