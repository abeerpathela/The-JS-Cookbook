const str1="Hello"; // declaration of string way-1
const str2="World";
const fullName="Abeer Pathela";
console.log(`Hello my name is ${fullName} and this from me ${str1} ${str2}.`);  // output of string using string literals 

const newName= new String(`Abeer Pathela`); // creation of a string way-2
console.log(newName);

// accessing chracters 

console.log(str1[1]);
console.log(newName[1]);

// method-1    :  length 
console.log(str1.length);

// method-2  : touppercase 
console.log(str1.toUpperCase()); // it does not provide the changes in original string same for tolowercase 

console.log(str1);

// method-3   :  toLowerCase
console.log(str1.toLowerCase());

// method-4    :   charat
console.log(str1.charAt(2)); 

// method-5   : indexOf
console.log(str1.indexOf('l')); 

// method-6  :  substring 
const newString=str1.substring(0,3);
console.log(newString);

// method-7   :  slice 
const anotherString=str1.slice(0,4);
console.log(anotherString);

// if we give a negitive integer inthe start of the slice then it starts from the starting of the string 
const string_3=str1.slice(-8,2);
console.log(string_3);

// method-8   :  trim 

// it is used to remove the extra space from the start of string and from the end of the string  

const string_4="     hello          ";
console.log(string_4.trim());

// method-9     :  replace 

// it is used to replace 

console.log(string_4.replace('ll','0'));

// method-10   :  includes 

// it returns true or false by checking wheater this string includes this part or not 

console.log(str1.includes("He"));

// method-11 :  split 

const sentence="hello world from Abcd";
console.log(sentence.split(" "));