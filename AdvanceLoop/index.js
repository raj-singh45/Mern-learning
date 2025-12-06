

//  writable , Enumerable , configurable default true set rhti h sb
//writable =>
// if writable :true => the property value can be reassigned 
//if writable :false => the property value is read-only  .

//enumerable =>  jis bhi key ka enumerable true hoga, un sbka acces hoga ya print hoga agr false hua to acces ni hoga
//inherit hoke jobhi property ya key ati h , uska enumerable true hua to wo bhi print hoga /acces hoga 

//configurable =>
//if configurable :true  =>  the property attribute (writable , enum, conf.) can be changed 
//if configurable :false  =>  the property attribute (writable , enum, conf.) can not  be changed 

// let obj1 = {
//     amount:232 ,
//     money:5000,
//  }
//  Object.defineProperty(obj1 ,"amount" ,{
//     writable: false  //accidently koi bhi amount ki value change na krde isiliye false kr diya
//     //ab hum amount key ki value ko modify ni kr skte
//  })
//  obj1.amount = 4000  ;
//  console.log(obj1.amount)


let customer = {
    name:"raj" ,
    age:23 , 
    account:234 ,
    balance : 2000
}
let customer2 = Object.create(customer) ; 
customer2.city = "haridwar" ; 
Object.defineProperty(customer2 , "name", {
    enumerable:false , 
})
for(let key in customer2){
    console.log(key)
}

// obect.prototype ke sare key for in loop isiliye acces ni kr pa rha tha kyuki sare keys ke enumerable false the
// console.log(Object.getOwnPropertyDescriptor(Object.prototype , 'toString'))
// {
//   value: [Function: toString],
//   writable: true,
//   enumerable: false,
//   configurable: true
// }
Object.defineProperty(Object.prototype , "toString" ,{
    enumerable:true, 
})
for(let key in customer2){
    console.log(key)
}
// city
// age
// account
// balance
// toString //ye agya bcz iska enum. true kiye hai 


//Object.defineProperties // ek sath multiple properties define kr skte h
// const student = {};

// Object.defineProperties(student, {
//   name: {
//     value: "Ravi",
//     writable: true,
//     enumerable: true
//   },
//   age: {
//     value: 21,
//     writable: false,
//     enumerable: false
//   }
// });

// console.log(student.name); // Ravi
// console.log(student.age);  // 21
// ✔ Output Explanation
// 🔹 name
// dikhega loop me

// change ho sakta hai

// 🔹 age
// loop me nahi dikhega (enumerable: false)

// change nahi ho sakta (writable: false)






