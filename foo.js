const foo = 'foo string';

async function fooFn(){
    setTimeout(() => {
        console.log('fooFn executed after 1 second');
    }, 3000);
}

module.exports = { foo, fooFn };