/* Streams | Buffers - Reading & Writing files is an asynchronous task, which requires time to fully complete 
                       the task especially for huge files. Due to this, we use streams/buffers to read / write 
                       data chunk by chunk instead of waiting till it's fully done. */
                       



const fs = require('fs');

// Create Read Stream

// createReadStream('./docs/blogV2.txt'); - First Argument : File Location

const readStream = fs.createReadStream('./docs/blogV2.txt', { encoding: 'utf-8'});

const writeStream = fs.createWriteStream('./docs/blogV3.txt');

// .on() is an Event Handler
// - It monitors the 'data'.
// - Everytime it loads a chunk of data, it excutes a callback function, with the chunk of data as the parameter.

// readStream.on('data', (chunk) => {
//     console.log('------ NEW CHUNK ------');
//     console.log(chunk);
//     writeStream.write('\n------ NEW CHUNK ------\n');
//     writeStream.write(chunk);
// });

// Basically does the same task above but using the pipe() method.
readStream.pipe(writeStream);