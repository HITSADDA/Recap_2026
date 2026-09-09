const EventEmmitter = require('events')

const evEmitter = new EventEmmitter()


evEmitter.on('greet', ({username, prof}) =>{
    console.log(`hii ${username}, you are ${prof}`)
})

evEmitter.emit('greet', {username: "Vishal", prof: "Full Stack Developer"})