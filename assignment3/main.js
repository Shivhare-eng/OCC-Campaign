console.log("Calling more than one custom module");
const calculator = require('./calculator');
let a=20;
let b=30;


console.log('addition :'+ calculator.add(a,b) );
console.log('subtraction :'+ calculator.sub(a,b));
console.log('multiply: ' + calculator.multiply(a,b));
console.log('divide :' + calculator.divide(a,b));