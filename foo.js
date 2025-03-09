async function waitMe(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log('async ran');
            resolve('done');
        }, 1000);
    })
}


module.exports = {
    add: (a, b) => a + b,
    myStr: 'hello',
    myAsync: waitMe
}