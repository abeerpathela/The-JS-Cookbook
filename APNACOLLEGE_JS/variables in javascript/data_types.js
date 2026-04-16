// Data Types

// using typeof for knowing the type of the variables

// 1.Number
let age=24;
console.log(typeof age);

// 2.BOOLEAN
let isFollow=true;
console.log(typeof isFollow);

// 3.string
let name="systummm";
console.log(typeof name);

// 4.Undefined
// by default all variables are undefined
let k;
console.log(typeof k);

// 5.Null
// null is a special value but when we want to get type of the null variable we get the type as object
// null means absence of the value matlab ki yaha per koi value honi chaiye thi jo ki abhi nahi hai 
let p=null;
console.log(typeof p);

// BigInt and Symbol are rrely used data types

// 6.BigInt
// bigint is used to store big integers in javascript to show big integers we write n after the number.
// let x=123n; 
// or 
let x=BigInt("123");
console.log(typeof x);

// 7.Symbol
let y=Symbol("Hello");
console.log(typeof y);

// objects are collection of values in js.
// objects are used to store data in key value pair format.
// in objects we will make a collection of keys and values and this collection is called object.

// example of objects:

const student={
    fullName:"systummm",
    age: 11,
    marks: 99,
    isPass: true,
};
console.log(typeof student);
console.log(student);

// accessing values in objects:
console.log(student["fullName"]);
// or
console.log(student.fullName);

// Changing values in object
student["age"]=student["age"]+1;
console.log(student.age);

