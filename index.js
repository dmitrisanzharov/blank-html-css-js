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