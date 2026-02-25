import axios from 'axios';
import fooStr1 from './foo.js';

axios.get('https://jsonplaceholder.typicode.com/todos/1').then(response => {
    console.log(response.data);
}).catch(error => {
    console.error('Error fetching data:', error);
});