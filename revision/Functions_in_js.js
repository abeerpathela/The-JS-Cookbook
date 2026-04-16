// Basic Function 

// function HelloWorld(){
//     console.log("Hello World");
// }

// HelloWorld();

// function AddTwoNumbers(a,b){
//     console.log(a+b);
// }

function AddThreeNumbers(a,b,c){
    let result;
    result=a+b+c;
    return result;
}
const a=AddThreeNumbers(1,2,3);
// console.log(a);

function afterLogin(username){
    return `${username} logged in successfully.`;
}
// let result=afterLogin("Abeer Pathela");
// console.log(result);

// What if we donot pass any argument in fuction call 
// console.log(afterLogin()); // it would print the statement but the value of the argument willl be set as undefined 

// A program to check if the argument is passed or not 

function afterLogin_2(username){
    if(username===undefined){
        console.log("please enter a username");
        return;
    }
    return `${username} just logged in`;
}
// console.log(afterLogin_2());

// the above condition  of if can be written in  clean way  -:
function afterLogin_3(username){
    if(!username){
        console.log("please enter a username");
        return;
    }
    return `${username} just logged in`;
}
// console.log(afterLogin_3());



// REST OPERATOR  
// it is used to pass multiple values inside the function which further fuction will make an array of it 
function displayArray(...num){
    return num;
}
// console.log(displayArray(200,400,600,800,1000));

function displayArray_2(val1,val2,...num){
    return num;
}
// console.log(displayArray_2(200,400,600,800,1000));

// Passing objects as argument of the function 
const object_1={
    username:"hit",
    price:199
};

function handleObject(obj){
    return `username is ${obj.username} and price is ${obj.price}`;
};

const result=handleObject(object_1);
console.log(result);

// Passing array as argument of this function

function getTheElementAt_Index_2(getArray){
    return getArray[2];
}
let elementAtTwo=getTheElementAt_Index_2([1,2,3,4,5,6]);
console.log(elementAtTwo);




