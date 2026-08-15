const person1 = {
    name: "Vishal",
    gender :"MALE",

    printName: function(country, state){
        console.log(`${this.name}, ${country}, ${state}`)
    }
}


const fm = {
    name: "Archana",
    gender: 'Female'
}

const fm2 = {
    name: "Sonal",
    gender: 'Female'
}

person1.printName.call(fm, "India", "Delhi")
person1.printName.call(fm, "India", "Rajasthan")

person1.printName.apply(fm2, ["India", "Maharashtra"])

let boundFunction = person1.printName.bind(fm2, "India", "Rajasthan")
boundFunction()