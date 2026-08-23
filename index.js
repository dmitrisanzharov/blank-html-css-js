
const employee = {
    baseSalary: 30000,
    overTime: 10,
    rate: 20,
    getWage: function(arg1){
        console.log('arg1', arg1);
        return this.baseSalary + (this.overTime * this.rate);
    }
}

let test = employee.getWage('foo');
console.log("test: ", test);


console.log(employee);

console.log(Object.getPrototypeOf(employee));