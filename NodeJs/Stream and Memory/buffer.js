// Different Method to create Buffer
const buffer1 = Buffer.alloc(100);
const buffer2 = Buffer.from('Vishal');
const buffer3 = Buffer.from([1, 2, 3, 4]);

// Writing data to Buffer
buffer1.write("Happy Learning");

// Reading data from Buffer
const a = buffer1.toString('utf8');
console.log(a);

// Check object is buffer or not
console.log(Buffer.isBuffer(buffer1));

// Check length of Buffer
console.log(buffer1.length);

// Copy buffer
const bufferSrc = Buffer.from('ABC');
const bufferDest = Buffer.alloc(3);
bufferSrc.copy(bufferDest);

const data = bufferDest.toString('utf8');
console.log(data);

// Slicing data
const bufferOld = Buffer.from('GeeksForGeeks');
const bufferNew = bufferOld.slice(0, 4);
console.log(bufferNew.toString());

// concatenate two buffer
const bufferOne = Buffer.from('Happy Learning ');
const bufferTwo = Buffer.from('With GFG');
const bufferThree = Buffer.concat([bufferOne, bufferTwo]);
console.log(bufferThree.toString()); 