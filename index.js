import axios from 'axios';
import foo from './foo.js'; 

async function main(){
    let a = await import('./bar.js');
    console.log(a.default);
    // console.log(foo);
}

axios.get('https://jsonplaceholder.typicode.com/todos/1').then(response => {
    console.log(response.data);
});

// main();