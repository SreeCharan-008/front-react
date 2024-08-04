// Number
let num = 42;
console.log("Number:");
console.log(num); // Output: 42

// String
let str = "Hello, world!";
console.log("\nString:");
console.log(str); // Output: Hello, world!

let str1 = "test" + 1 + "string"+ 123;
console.log('\nString:');
console.log(str1);


// Boolean
let bool = true;
console.log("\nBoolean:");
console.log(bool); // Output: true

let bool1 = false;
console.log("\nBoolean:");
console.log(bool);



// Undefined
let undef;
console.log("\nUndefined:");
console.log(undef); // Output: undefined

// Null
let empty = null;
console.log("\nNull:");
console.log(empty); // Output: null

// Object
let obj = { name: "Alice", age: 25 };
console.log("\nObject:");
console.log(obj); // Output: { name: 'Alice', age: 25 }

let obj1 = { name: "Unknown", age: 25 ,height:"5.5" ,function(){
    console.log("printoutput");
}
};
console.log("\nObject1:");
console.log(obj1);



// Array
let arr = [1, 2, 3, 4, 5];
console.log("\nArray:");
console.log(arr); // Output: [1, 2, 3, 4, 5]

// Function
let func = function() { return "Hello from a function!"; };
console.log("\nFunction:");
console.log(func); // Output: [Function: func]
console.log(func()); // Output: Hello from a function!

let func1 = function()
{
    let a = "this is";
    let b= "new fucntion";
    return a+b;
}

console.log("\nfunction1:");
console.log(func1());

let sun=25;
if(sun<20){
    console.log('its hot buddy')
}else if(sun!=25){
    console.log('take sun cream')
}else
console.log('dont go out')

//for loop//
let hi='wow';
for(i=0;i<5;i++){

console.log(hi)
};
//while loop//

const car = "BMW";

let z = 0;
while (z < 10) {
    console.log(car);
    z++;
}
//do while//
let a=0
do{
    console.log(a)
    a++
}while(a<11);
//switch cse//
let frdstage=3;
switch(frdstage){
    case 1:
        console.log('hi anna')
        break;
    case 2:
        console.log('hi da')  
        break;
    case 3:
        console.log('hi macha')      
}
for (let c = 0; c < 10; c ++) {
    if(c === 5) {
        break;
    }
    console.log(c);
}

// function is nothing but spacific task//
// Function declaration
function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet('Alice')); // Output: Hello, Alice!

// Function expression
const add = function(x, y) {
    return x + y;
};

console.log(add(2, 3)); // Output: 5

// Function with default parameter value
function greetDefault(name = 'Guest') {
    return `Hello, ${name}!`;
}

console.log(greetDefault()); // Output: Hello, Guest!

// Return values
function square(x) {
    return x * x;
}

const result = square(7);
console.log(result); // Output: 49

// Basic arrow function
const add1 = (a, b) => a + b;                 

console.log(add1(2, 3)); // Output: 5

// Arrow function with multiple lines
const multiply = (a, b) => {
    const result = a * b;
    return result;
};

console.log(multiply(4, 5)); // Output: 20

// Call back function
function processUserInput(callback) {
    const name = 'Bob';
    callback(name);
}

function greetUser(name) {
    console.log(`Hello, ${name}!`);
}

processUserInput(greetUser)

variables - let const var
datattypes
operators
statements - if else if else
loops - for loop while loop do while
functions 
dom manipulation 
eventhandlers
types of outputs