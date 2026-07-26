// // Constructor Function
// function Circle(radiusArg){
//     this.radius = radiusArg;
//     this.draw = function() {
//         console.log('draw');
//     }
// }

// let circle2 = new Circle(1);
// console.log("circle2 constructor: ", circle2.constructor);

// // Factory Function
// function createCircle(radiusArg){
//     return {
//         radius: radiusArg,
//         draw: function() {
//             console.log('draw');
//         }
//     };
// }

// let circle = createCircle(1);
// console.log("circle constructor: ", circle.constructor);

// let x = {};
// console.log("x constructor: ", x.constructor);

// let y = new Object();
// console.log("y constructor: ", y.constructor);

// let a = 1; 
// console.log("a constructor: ", a.constructor);

// let b = 'hello';
// console.log("b constructor: ", b.constructor);



function Circle(radius) {
    this.radius = radius;

    this.myNumber = 1;
    this.calc = function () {
        return this.myNumber * 2;
    };

    Object.defineProperty(this, 'myNumber', {
        get: function () {
            return 'get';
        },
        set: function (value) {
            console.log('setter called')
            return value;
        }
    });
}

const circle = new Circle(10);
console.log('circle: ', circle);

let test = circle.myNumber;
console.log(test);

circle.myNumber = 2;
