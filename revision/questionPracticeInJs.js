// Given an array of numbers, return a new array where each number is multiplied by 10.
const arr=[1,3,5,7,9];
const double=function(x){
    return x*10;
}
const arr_2=arr.map(double);
console.log(arr_2);

//Convert an array of strings to an array of objects with name property
// Example: ["Alice", "Bob"] → [{name: "Alice"}, {name: "Bob"}]

const name_function=function(arrayy){
    return arrayy.map(item=>({name:item}));
}
const array=["Abeer Pathela","Shradhha"];
const result_array=name_function(array);
console.log(result_array);

// Capitalize the first letter of each word in an array.
const sentence="hello world";
const words=sentence.split(" ");
const captilaize=function(word){
    return word.charAt(0).toUpperCase()+word.slice(1);
}
const new_sentence=(words.map(captilaize)).join(' ');
console.log(new_sentence);

// Given an array of objects with {price, quantity}, return an array of total prices (price * quantity).

const input=[
    {price: 10, quantity: 2},
    {price: 5, quantity:5},
    {price: 20, quantity:1}
];
const multiplyFunction=function(obj){
    return obj.price*obj.quantity;
}
const result=input.map(multiplyFunction);
console.log(result);

