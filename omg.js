const mainUrl = 'https://www.youtube.com/watch?v=hvPGfcAgk9Y&list=PLPNW_gerXa4OoypUEgZI7uouI12WZrxeS&index=2';


const searchUrl = new URL(mainUrl);
console.log("searchUrl: ", searchUrl);


const a = searchUrl.searchParams;
console.log('a', a);

const b = new URLSearchParams(searchUrl.search)
console.log("b: ", b);

const c1 = Object.fromEntries(a)
console.log("c1: ", c1);