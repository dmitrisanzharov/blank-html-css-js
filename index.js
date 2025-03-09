const addFn = require('./foo').add;

console.log("moduleOne: ", addFn);
console.log('moduleOne', addFn(1,2));


function callMe(){
    import('./someModule').then((module) => {console.log('module', module);});
}