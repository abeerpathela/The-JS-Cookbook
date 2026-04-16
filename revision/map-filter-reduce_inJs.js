const arr=[5,4,6,7];
// MAP

const double=function(x){
    return x*x;
}
const triple=function(x){
    return x*x*x;
}
const binary=function(x){
    return  x.toString(2);
}
// console.log(arr.map(double));
// console.log(arr.map(triple));
// console.log(arr.map(binary));

// FILTER

function isOdd(x){
    return x%2!=0;
}
const IsEven=arr.filter((x)=>x%2==0)  // good syntax practice 
// console.log(IsEven);

// REDUCE
// reduce is used where we have to travel the whole array and we have to give the output of the single number or element 
// eg- sum of all the elements in an array 
// In reduce , the parameter accumulator makes/handles the result  and the parameter current iterates through each element in the array 

function findSum(arr){
    let sum=0;
    for(let i=0; i<arr.length; i++){
        sum=sum+arr[i];
    }
    return sum;
}
// console.log(findSum(arr));

const output=arr.reduce(function (accumulator,current){
    accumulator=accumulator+current;
    return accumulator;
},0);    // here, 0 is initial value of the accumulator 
// console.log(output); 


const output_2=arr.reduce(function(accumulator,current){
    if(accumulator<current){
        accumulator=current;
    }
    return accumulator;
},0);
// console.log(output_2);

// QUESTION - (i) get the list of full names from the given data 
const users=[
    {firstName: "akshay" , lastName: "saini", age:26},
    {firstName: "donald", lastName: "trump", age:75},
    {firstName: "elon" , lastName: "musk" , age:50},
    {firstName: "deepika" , lastName: "padukone", age: 26}
];

const fullName=function(obj){
    return obj.firstName+" "+obj.lastName;
}
// console.log(users.map(fullName));

// (ii) we have to find the list of the ages and the count of the no of people with same age 

const output_3=users.reduce(function(acc,curr){
    if(acc[curr.age]){
        acc[curr.age]++;
    }
    else{
        acc[curr.age]=1;
    }
    return acc;
},{})
// console.log(output_3);

// (iii) Find the firstname of the people whose age is above 30 


const output_4=users.filter((x) => x.age>30);
const output_5=output_4.map(function(x){
    return x.firstName;
});
// console.log(output_5);





