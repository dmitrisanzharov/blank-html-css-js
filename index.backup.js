// object
const circle = {
    radius: 1,
    draw: function () {
        // console.log('draw');
    }
};

// factory function
function drawFn() {
    // console.log('it drew');
    return 'omg it worked';
}

function CircleFactory(radius) {
    return {
        radius,
        draw: drawFn
    };
}

let testA = new CircleFactory(2)
// console.log("testA: ", testA);

// let final = CircleFactory(2).draw();
// console.log("final: ", final);

// constructor function

function MyConstructor(myArg) {
    // console.log('this', this);

    this.myArgInObj = myArg; 

    this.myMethod = function(){
        // console.log('run something');
    }
}

let foo = new MyConstructor('test');
// console.log("foo: ", foo);


// new constructor fn

function CreateCircle(radiusArg){
    this.radius = radiusArg;
    this.draw = function(){
        // console.log('draw');
    }
}

let testB = new CreateCircle(2);
// console.log("testB: ", testB);


// CONSTRUCTOR FUNCTION 2

function MyConstructor2(){
    console.log('this', this);
}

let testC = new MyConstructor2();

console.log('this', this);


////////////////////////

let a = new String();
console.log(a.constructor);

let b = new Number();
console.log(b.constructor);

function foo(a, b){

}

console.log(foo.length);

/////////////////////


// let sharedVal = 1;

// function Circle(radius) {
//     this.radius = radius;
//     this.myNumber = 1;
//     this.calc = function () {
//         return this.myNumber * 2;
//     };
// }

// const circle = new Circle(10);
// console.log('circle: ', circle);

// Object.defineProperty(circle, 'myProp', {
//     get: function () {
//         console.log('getter called');
//         return sharedVal;
//     },
//     set: function (arg) {
//         console.log('setter called', arg);
//         sharedVal = sharedVal + arg;
//     }
// });

// let test2 = Object.getOwnPropertyNames(circle);
// console.log('test2: ', test2);

// let whatIsTheValue = (circle.myProp = 2);
// console.log('whatIsTheValue: ', whatIsTheValue);

// let one = circle.myProp;
// console.log('one: ', one);
