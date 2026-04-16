// object literals 

const mySym= Symbol("key1");                    // creation of Symbol 

const JsUser={                                  // creation of object using key:value pairs 
    namee: "Abeer Pathela",
    "FullName": "Abeer Pathela",
    [mySym]:"myKey1",
    age:18,
    location:"Sri Muktsar Sahib",
    email:"pathelaabeer@gmail.com",
    isActive:false,
    lastLoginDays:["Monday","Tuesday"]
};

// const object_1=new Object();                // creation of object method-2      // this is a singleton object 

// const object_2={};                          // creation of object method-3      // this is a non singleton object 


// console.log(JsUser[mySym]);                     // method of printing the Symbol

// Method of accessing Value through Keys

// Method-1 
// console.log(JsUser.namee);

// Method-2
// console.log(JsUser["namee"]);

// why method-2 is important ?
// if any key is defined with string (like: in our object "fullName") so it is important to learn method 2 

// example-:
// console.log(JsUser.FullName);
// it works here but fails in other compilers 

// console.log(JsUser["FullName"]);
// correct method for accessing this type of value 

// updating the value of keys inside the object 
// JsUser.email="abeerpathela1234@gmail.com"; 

// Method of Object 

// Method-1 :       freeze
// it would not allow the values to be changed of the object 

// Object.freeze(JsUser);
// JsUser.email="abeerpathela1234@gmail.com";
// console.log(JsUser.email);

// Adding Another Key:Value pair inside the Object
// JsUser.greeting=function(){
//     console.log("Hello "+this.FullName);
// }
// console.log(JsUser.greeting());

// CREATION OF NESTED OBJECT 
const regularUser={
    email:"Someone@gmail.com",
    fullName:{
        userFullName:{
            firstName:"ABC",
            lastName:"DEF"
        }
    }
}

// Accessing inside the Nested Object
// console.log(regularUser.fullName.userFullName.firstName);

// Method Of Object 

// Method-2:        assign
const object_1={1:"a",2:"b"};
const object_2={3:"c",4:"d"};
// const obj3=Object.assign({},object_1,object_2);
// console.log(obj3);

// Method-3:        spread method       (Most Preferable)
// works same as assign

const obj_3={...object_1,...object_2};
// console.log(obj_3);

// Method-4:        keys
// It takes object in parameter and return the array of the keys of that object 
// console.log(Object.keys(object_1));

// Method-5:        values
// It takes object in parameter and return the array of the values of that object
// console.log(Object.values(object_1));

// Method-6:        entries
// It makes array of the each key value pair 
// console.log(Object.entries(object_1)); 

// Method-7:        hasOwnProperty
// It takes in a string and would match that do there exist any key of this name 
// output will be either true or false 
// console.log(object_1.hasOwnProperty('1'));

// DESTRUCTURING OF OBJECTS 

// basically it is for making the accessing of the keys of the object easy 

const course={
    courseName:"Js in hindi",
    price:999,
    courseInstructor: "Hit"
};
// earlier accessing way 

// console.log(course.courseName);
// method of accessing with destructuring 

// const {courseName}=course;   // By this now with courseName it can pickup the value for the key courseName from object course 
// console.log(courseName);

// const {courseName:a}=course;   // By this now with a it will refer to key courseName of object course 
// console.log(a);














