//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3


//Stack(Primitive) v/s heap(refernce)

let myname="Anirudh"
let another_name=myname

console.log("Printing before for primitive");
console.log(myname);
console.log(another_name);

another_name="Vasudev"
console.log("Printing after for primitive");
console.log(myname);
console.log(another_name);

let userOne={
    email:"userone@gmail.com",
    upi:"12345"
}

let userTwo=userOne

console.log("Printing before for reference");
console.log(userOne.upi);
console.log(userTwo.upi);

userTwo.upi="54321"

console.log("Printing after for reference");
console.log(userOne.upi);
console.log(userTwo.upi);







