function myFn(arg1) {
    console.log('============================');
    console.log('this', this);
    console.log('arg1', arg1);
}

myFn.call({ anyKey: 'foo' }, 'argument1');

let a = myFn.call({}, 'myArg');
console.log('a: ', a);

let b = new myFn('hello');
console.log("b: ", b);

