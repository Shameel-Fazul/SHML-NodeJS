const checkFamily = require('./people'); 
// ^ require('./people') will go to the people.js file and run that file's code.

console.log(checkFamily);
console.log(checkFamily.firstName + checkFamily.lastName);

const { firstName } = require('./people')
console.log(`Destructuring ${firstName}`);

const os = require('os'); // NodeJS Object for host OS related information.
console.log(os.type());