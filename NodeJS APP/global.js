
// GLOBAL OBJECT - LIKE THE WINDOW OBJECT ON BROWSERS
//console.log(global);

global.setTimeout(() => {
    console.log('Hello, Shameel.');
    global.clearInterval(name);
    console.log('Interval has been cleared, Shameel.');
}, 10000)

const name = global.setInterval(() => {
    const firstName = 'Shameel';
    const lastName = 'Fazul';
    console.log(`Hello, ${firstName} ${lastName}`);
}, 1000);

console.log(__dirname); // File directory location
console.log(__filename); // File directory location but with file name as well.