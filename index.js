
function anyName(){
    console.log('fn has ran');
}

function drawFn(){
    console.log('draw circle');
}

function MyClass(){
   

    this.barArg = 'barArg';

    this.myFn = anyName;

     console.log('this', this);
}


const foo = new MyClass();
console.log("foo: ", foo);


console.log('============================');

// Factory Function
function createCircle(radiusArg){
 return {
 radius: radiusArg,
 draw: function() {
 console.log('draw');
 }
 };
}

let a = new createCircle(2);
console.log("a: ", a);


// constructor
function CreateCircle2(radiusArg){
    this.radius = radiusArg;
    this.draw = drawFn;
}

let b = new CreateCircle2(2);
console.log("b: ", b);


console.log('============================');

function NothingButThis(){
    console.log('this', this);
}

let nothingThere = NothingButThis();
console.log("nothingThere: ", nothingThere);