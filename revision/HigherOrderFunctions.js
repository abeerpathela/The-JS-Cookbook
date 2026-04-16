// Higher order function 
// any function which takes function as argument inside or they return the function after call 

function x(){                       // callback function 
    console.log("Hello World");
}
function y(anyFunction){            // Higher order function 
    anyFunction();
}
// y(x);

// basic example of higher order functions 
// calculate area,diameter,circumference

const radius=[3,1,2,4];

const area=function(radius){
    return Math.PI*radius*radius;
};
const diameter=function(radius){
    return 2*radius;
};
const circumference=function (radius){
    return 2*Math.PI*radius;
};
const calculate=function(radius,logic){         // higher order function 
    const output=[];
    for(let i=0; i<radius.length; i++){
        output.push(logic(radius[i]));
    }
    return output;
};
// console.log(calculate(radius,area));            // Function call for the above function

// Another way of creation of function calculate 
Array.prototype.calculate_2= function (radius,logic){
    const output=[];
    for(let i=0; i<radius.length; i++){
        output.push(logic(radius[i]));
    }
    return output;
}
 console.log(radius.calculate_2(radius,area)); 
// Here we obsereve that the function we made calculate is similar to inbuilt function map 
// console.log(radius.map(area));

