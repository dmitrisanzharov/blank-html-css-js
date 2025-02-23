// consoleMe.js
function consoleMe(arg){
    console.log('args', arg);
}

const myVar = 'myVar str';

async function asyncFunc(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('asyncFunc resolved');
        }, 1000);
    });
}

module.exports = {
    anyKey: consoleMe,
    anyKey2: myVar,
    anyKey3: asyncFunc
}