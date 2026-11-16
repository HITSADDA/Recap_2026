import express from 'express'
import { availableParallelism } from 'node:os'
import cluster from 'cluster'

// Checking for avilable CPUs
const avilableCPUCores = Number(availableParallelism()) - 2;

if (cluster.isPrimary) {
    for (let i = 0; i <= avilableCPUCores; i++) {
        cluster.fork()
    }

    cluster.on('exit', () => {
        process.exit()
    })
} else {
    const app = express()

    app.get('/', (req, res) => {
        res.send({
            message: 'hii'
        })
    })

    app.listen(3000, () => console.log(`App is Running on: ${3000}`))
}