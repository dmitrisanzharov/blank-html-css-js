function Circle(radius) {
   this.radius = radius;


   this.myNumber = 1;
   this.calc = function() {
       return this.myNumber * 2;
   }
}


const circle = new Circle(10);

circle.myNumber = '1';

let test = circle.calc();
console.log('circle', circle);
console.log("test: ", test);
