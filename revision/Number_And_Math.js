
// Numbers 

const score=400;
console.log(score);
console.log(typeof score); // number
const balance=new Number(400); // this creates an object which cntains a a data type number with value 400 in it 
console.log(balance);
console.log(typeof balance); // object 
// toString
console.log(balance.toString()); // this converts the number to string 
// toString with length 
console.log(balance.toString().length); // this first convers that to astring and then tells its length 
// toFixed 

// it sees how many values after decimal are to be displayed  

console.log(balance.toFixed(2)); // this will tell us value about fixed points 

// toPrecision

// it gives us the precise value of the digits we require by rounding of the rest of the number 
// it returns string as the output 


const otherNumber=123.89675;
console.log(otherNumber.toPrecision(4));

console.log(otherNumber.toPrecision(3));  // 124

console.log(otherNumber.toPrecision(2)); // as the numbers before the decimal were 3 and we demanded the precise value of 2 
// so it returned the value as exponential 

// toLocaleString 

// input 1000000
// process number.toLocaleString()
// output 10,00,000

const hundereds=1000000;
console.log(hundereds.toLocaleString());

console.log(hundereds.toLocaleString(`en-IN`)); // this will print commas according to indian commas used 

//   Maths

// abs

// it takes negitive values in and return positive values 
console.log(Math.abs(-4));

// round

// it takes the value and returns the rounded off value of them 

console.log(Math.round(9.88));
console.log(Math.round(9.11));

// ceil 

// it rounds off the number but return the top rounded value 
// eg- inp: 4.2 output: 5

console.log(Math.ceil(4.2));

// floor 

// it rounds off the number but return the bottom rounded value 
// eg- inp: 4.8 output: 4

console.log(Math.floor(4.9));

// min 

// it returns the min value 

console.log(Math.min(8,7,6,5,4,3,2,1));

// max 

// it returns the max value 

console.log(Math.max(8,7,7,6));

// random 

console.log(Math.random());

// in random to bring values in a certain range what do we do -:

const min=10;
const max=20;

console.log(Math.floor(Math.random() * (max - min + 1 ))+min);  // remember this formula 




