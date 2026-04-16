// basic array's

// resizeable and can contain a mix of diffrent datatypes 

// follow indexing system starting from zero 

// whenever we perform array copy operations create shallow copies 


const myArray = [0,1,2,3,4,5,"true"];
const myHeroes=["Shaktiman","IronMan","batman","HawkEye"];

const arr_2=new Array(0,1,2,3,4,5,"true"); // another way of declaring an array 

// accessing elements in js 

// console.log(myArray[6]);

// Array Methods 

// push 
// used to add elements at the back of the array 
myArray.push("false");


//pop
// used to delete the last element of the array 
myArray.pop();

// unshift 
// used to add the elements at the front of the array 
myArray.unshift('a','b','c','d','e','f');

// shift 
// it removes the one element from the front of the array 
myArray.shift();

// includes 
// in this we pass an element and it would give output true or false 
// console.log(myArray.includes(1,2,3,4,5));

// indexof
// it would take a element and return the index of that element if it is present else if the element is not present then it would return -1 
// console.log(myArray.indexOf(9));
// console.log(myArray.indexOf(1));

// join
// it would binds the array and change the typeof array from Array to String
const new_array=myArray.join();
// console.log(new_array);
// console.log(typeof new_array);

// slice,splice
// diffrence b/w slice and splice is very important -:
// slice,splice both take some part of the array out ,but slice doesnot make changes in orignal array ,whereas splice makes changes in original array 

// console.log("Orignal Array before Slice,splice : ");
// console.log(myArray);
// const myn1=myArray.slice(1,3);
// console.log("Slice part : ");
// console.log(myn1);
// console.log("Orignal array After slice : ");
// console.log(myArray);

// const myn2=myArray.splice(1,3);
// console.log("Splice part : ");
// console.log(myn2);
// console.log("Origninal array After splice : ");
// console.log(myArray);

// PROBLEM-:

// what if we push an array into another array with push method 

// we see that it pushes in an array form and accesing of this array is now made difficult 

const marvel_heroes=["Thor","ironman","spiderman"];
const dc_heroes=["superman","flash","batman"];
// marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes);

// SOLUTION 1 -:

// concat 

const new_array_1=marvel_heroes.concat(dc_heroes);
// console.log(new_array_1);

// SOLUTION 2 -:

// spread method (MOST PREFERABLE)

const new_array_2=[...marvel_heroes,...dc_heroes];
// console.log(new_array_2);


// flat 
// it would mix all the elemnets of the sub array with the main array 

const mix_array=[1,2,3,4,5,[2,3,4,5],6,[7,8,[9,10,[11,[12,13]]]]];
const new_array_3=mix_array.flat(Infinity);
// console.log(new_array_3);

// isArray
// check that what passed inside the parameter is array or not return true or false 

// console.log(Array.isArray("Hit"));
// console.log(Array.isArray(mix_array));

// from 
// makes an array from what passed as parameter 

// console.log(Array.from("HIT"));

// of
// does the same thing as 'from'
let score_1=100;
let score_2=200;
let score_3=300;
const new_array_4=Array.of(score_1,score_2,score_3);
console.log(new_array_4);














