const family = ['Fazul', 'Sharminaz', 'Shakeel', 'Shameel', 'Shahla', 'Shafeen'];

console.log(family);

//module.exports = family[3]; //Export Specific Data.

module.exports = {
    firstName : family[3],
    lastName : family[0]
}