
// const circle = {
//     radius: 1,
//     draw: function() {
//         console.log('draw');
//     }
// }; 


// Factory Function
// function createCircle(radiusArg){
//     return {
//         radius: radiusArg,
//         draw: function() {
//             console.log('draw');
//         }
//     };
// }

// let circle = createCircle(1);
// console.log("circle: ", circle);


// // Constructor Function
// function Circle(radiusArg){
//     this.radius = radiusArg;
//     this.draw = function() {
//         console.log('draw');
//     }
// }

// let circle2 = new Circle(1);
// console.log("circle2: ", circle2);


// function Car(makeArg){
//     console.log('this', this)
//     this.make = makeArg;
//     this.start = function() {
//         console.log('start');
//     }
// }

// let bmw = new Car('BMW');
// console.log("bmw: ", bmw);

// console.log('this', this);


function TestThis(){
    this.anyKey = 'anyValue';
    console.log('this', this);
}

new TestThis();