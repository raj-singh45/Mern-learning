let user1 = {
    name:"raj" ,
    age:23
}
let user2 = {
   amount:232,
   money: 5000
}
 user2.__proto__ = user1 ;
 console.log(user2.name) ;  //raj //user1 ki property inherit kr li user2 ne
let arr = [1,2,3] ;
console.log(arr.__proto__==Array.prototype) ; //array ki properties and methods show kr dega 
//array ka prototype object h jisme sare array ke methods hote h 
//jaise push , pop , filter , map etc
console.log(arr.__proto__.__proto__==Object.prototype) ; //true
// arr bnega to automatically uska prototype array ka prototype se attach hojyega 
console.log(arr.__proto__.__proto__.__proto__==null) ; //true
//object ka prototype null pr end ho jata h
//object ka prototype bhi ek object hota h jisme sare object ke methods hote h 
//jaise toString , hasOwnProperty etc
//  console.log(Object.prototype) ; //yeh object ka prototype h jisme sare object ke methods hote h  
//  console.log(Array.prototype) ; //yeh array ka prototype h jisme sare array ke methods hote h  
//  console.log(Function.prototype) ; //yeh function ka prototype h jisme sare function ke methods hote h  
//function ka prototype bhi ek object hota h jisme sare function ke methods hote h 
//jaise call , bind , apply etc

