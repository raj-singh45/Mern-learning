 const arr = [10 ,20 ,11,29,49] ;
 for(let value of arr){
    console.log(value)
 }
 //it will not give index it will give value directly
 let str = "hello" ;
 for (let char of str){
    console.log(char)
 }
 

 //dont use for of loop on object it will give error
 const obj = {
    name:"raj" ,
    age:23, 
    gender:"male"       
 }
 for (let key of obj){
   console.log(key)
 }
//TypeError: obj is not iterable
// for of loop sirf iterable pr hi chlta h jaise array , string , map , set etc
//object iterable ni h


