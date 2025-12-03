// const user= {
//     name: "Ravi",
//     age: 24,
//     city: "Delhi"
// };
// console.log(user)
//read
// console.log(user);
// console.log(user.name);
// console.log(user["age"]);
//update 
// user.age= 25 ;
// console.log(user.age);
//delete
// delete user.city ;
// console.log(user);


//obj copy by reference
// const user2 = user ;
// user2.name= "Raj" ;
// console.log(user);
// console.log(user2);
// user.pincode= 110001 ;
// console.log(user);
// console.log(user2); 
// console.log(user === user2) ; //true 
//true because dono ka reference same hai
//agar alag copy krna hai to spread operator use krna padega
// const user3 = { ...user } ;
// user3.name= "Rohit" ;
// console.log(user);
// console.log(user3);
// console.log(user === user3) ; //false because dono ka reference alag hai

//important methods
// console.log(Object.keys(user)) ; // [ 'name', 'age', 'city' ]
// console.log(Object.values(user)) ; // [ 'Ravi', 24, 'Delhi' ]
// console.log(Object.entries(user)) ; // [ [ 'name', 'Ravi' ], [ 'age', 24 ], [ 'city', 'Delhi' ] ]
// for(let keys in user){
    //  console.log(keys);
    // name
    // age
    // city
     

    // console.log( user[keys]);//keys key ki value hold kr rha hai  object name me  keys ko dalenge to obj me sab key traverse krke value print krdega
//     Ravi
//    24
//   Delhi
        //user.keys is invalid user ke andr keys search ni kr skte kyuki hai hi ni
    //user[keys] to access value
    // internally user["name"] and output will be name Ravi
    // console.log( keys, user[keys]); //obj ke andr key value pair print krdega
//     const user= {
//     name: "Ravi",
//     age: 24,
//     city: "Delhi"
// };

//destructuring
// const { name, age, } = user ; //user se name and age extract krke alag variable me store krdo
// console.log(name, age) ; //Ravi 24

// const { name: userName, age: userAge, } = user ; //user se name and age extract krke alag variable me store krdo with different variable names
// console.log(userName, userAge) ; //Ravi 24 ab username and userage variable me store hoga isse hi access kr skte h


//for of loop array ke liye hota h
// const tempArray = Object.keys(user) ;
// console.log(tempArray) ; // [ 'name', 'age', 'city' ]
// for (let keys of tempArray) {
//     console.log(keys); 
// }
// for(let value of Object.values(user)){
//     console.log(value);
// }
// for (let entry of Object.entries(user)){
//     console.log(entry);
// }
//ye array retuern krta h jisme key value pair hoga
// [ 'name', 'Ravi' ]
// [ 'age', 24 ]
// [ 'city', 'Delhi' ]
// for (let [ keys,values ] of Object.entries(user)){
//     console.log(keys , values);
    //name Ravi
    //age 24
    //city Delhi
// }

//object ke andr functions
//     const user= {
//     name: "Ravi",
//     age: 24,
//     city: "Delhi",
//     greeting: function(){
//         console.log(`heelo ${this.name} baccha`);
//         return 20;

//     }
// };
//  const user2 ={
//     name: "Raj",
//     age: 25,
//     city: "Mumbai",
//  }   
//  user2.greeting = user.greeting ;
//  user2.greeting() ; //hello Raj baccha
// console.log(user.greeting()) ; //hello Ravi baccha
//ye this keyword use krke current object ko point krta h jisme function call ho rha h  
//agar this ni use krte to dono me same output aata kyuki wo user.name ki value user2 me bhi print krdega

//hum obj ke andr obj use kr skte hai mtlb nested object
 const user ={
    name: "Raj",
    age: 25,
    address:{
        city:"Mumbai",
        pincode: 400001,
    }
 }   
//  console.log(user)
// console.log(user.address.city) ; //Mumbai

//refre copy 
// const user2 = user
// console.log(user2.address.city) ; //Mumbai

//user ko independent copy krna h to spread operator use krna padega

// const user3 = { ...user } ;
// user3.name = "Rohit" ;
// console.log(user.name) ; //Raj
// console.log(user3.name) ; //Rohit

user3.address.city = "Pune" ;
console.log(user.address.city) ; //Pune
console.log(user3.address.city) ; //Pune

//kyuki spread operator sirf first level pr hi copy krta h nested object ke andr wala object reference copy krta h


//#deep copy independently  obj ke  nested object ko copy krna h to structuredClone() use krna padega
const user3 = structuredClone(user) ;
user3.address.city = "Bangalore" ;
console.log(user.address.city) ; //Mumbai
console.log(user3.address.city) ; //Bangalore


        