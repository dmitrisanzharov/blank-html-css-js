export default function (){
    console.log("fooFn1 ran");
}

// export default fooFn1;

function fooFn2(){
    console.log("fooFn2 ran");
}

export {fooFn2}

const str1InFoo = "str1InFoo";
export {str1InFoo};
