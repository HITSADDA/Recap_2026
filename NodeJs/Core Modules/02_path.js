const path = require('path')

// Special Constants -> Only Avialble for Common js
console.log(__dirname)
console.log(__filename)

const joined_path = path.join(__dirname, 'Users', "vsg", 'Ravan.txt')
console.log(joined_path)


const parsedPath = path.parse(joined_path)
console.log(parsedPath)

const dir = path.dirname(joined_path)
console.log(dir)

const ext = path.extname(joined_path)
console.log(ext)

const base = path.basename(joined_path)
console.log(base)