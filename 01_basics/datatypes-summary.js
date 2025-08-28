// Based on how value is stored and accessed 
// data types are of two types


// Primitive
// 7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "nagraj", "doga"]

let myobj = {
    name: "Siddharth",
    age: 35
}

const myFunction = function () {
    console.log("Hello world");
}

// console.log(typeof bigNumber);
// console.log(typeof outsideTemp);
// console.log(typeof myFunction);
// console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3



// ++++++++++++++++++++++++++++++

// Stack(Primitive), Heap(Non-primitive)

let myName = "siddharth mishra"
let anotherName = myName
anotherName = "hello world"
console.log(myName)
console.log(anotherName)

let user1 = {
    email: "user@gmail.com",
    upi: "user@ybl.co"
}

let user2 = user1

user2.email = "user2@.co.in"

console.log(user1.email)
console.log(user2.email)

