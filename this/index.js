// this
// In non-strict mode, 'this' refers to the global object (window in browsers, global in Node.js)
//  function greet() {
//      console.log(this);
//  }
//  greet();
//  let a = 1 ;
//  let b =3 ;
//     console.log(a + b);
// "use strict"
// In strict mode, 'this' is undefined in functions that are not called as methods
// function greetStrict() {
//     console.log(this);
// }
// greetStrict();

//agar context window ka denge to function strick mode me bhi window ko refer karega agr uska scope global object  h var ka scope global h to var wale fxn expression me hum window. use kr skte h
// let meet = function(){
//     console.log(this)

// }
// window.meet();   //window.meet is not a function bcz let global object ka part ni h


// var greet = function(){
//     console.log(this)

// }
// window.greet();

// function greet() {
//     console.log(this);
// }
// window.greet()



//this inside Object
// const person = {
//     name: 'Alice',
//     greet: function() {
//         console.log(this); // 'this' refers to the person object
//         //{ name: 'Alice', greet: [Function: greet] }
//         console.log(this.name); // Output: Alice
//     }
// }
// person.greet(); // Output: Alice



//arrow function dont have their own this they inherit this from the surrounding lexical scope
//ye obj global scope me h  and we know global scope me this window ko refer krta h
// const person = {
//     name: 'Bob',
//     greet: () => {
//         console.log(this);
//         console.log(this.name); // Output: undefined
//     }
// }
// person.greet(); // Output: undefined
// const person = {
//     name: 'Bob',
//     greet: function () {
//         let ab = () => {
//             console.log(this);
//             console.log(this.name);
//         }
//         ab();
//     }
// }

//Object
// greet
// :
// ƒ ()
// name
// :
// "Bob"

//arrow fxn ke pass khud ka this ni h to wo surrounding lexical scope se this lega
//iske sorrounding me functional scope h jiska this person object ko refer krta h
// person.greet(); // Output: Bob





//inside a constructor or class
// class Person {
//     constructor(na , ag){
//         this.name = na ;
//         this.age  =ag;
//     }
// }
//a.name = "raj" ,
//this.name = na ;
// let obj = new  Person ("raj" , 24) ;
// console.log(obj) ; // Person { name: 'raj', age: 24 }
//agar hum constructor function me arrow function use krte to wo global object ko refer krta
// krta na ki newly created object ko
// class PersonArrow {
//     constructor(na , ag){
//         this.name = na ;
//         this.age  =ag;
//         this.greet = () => {
//             console.log(this.name);
//         }
//     }
// }
// let obj2 = new  PersonArrow ("raj" , 24) ;
// obj2.greet() ; // raj










