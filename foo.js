function consoleMe(arg){
    console.log(arg);
}

const blahStr = 'blahStr';

async function waitMe(){
    return await new Promise((resolve) => {
        setTimeout(() => {
            resolve('omg final');
        }, 2000);
    });
}

module.exports = 'ayyayayay';