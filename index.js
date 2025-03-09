const myModuleOne = require('./foo');
const bar = require('./bar');

myModuleOne.myAsync(); // async
console.log("moduleOne: ", myModuleOne);
console.log('moduleOne', myModuleOne.add(1,2));
console.log('str', myModuleOne.myStr);
console.log('bar', bar);