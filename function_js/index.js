// function add(num1,num2){
//    console.log(num1+num2)
// }
// add(1,2);
// function mul(num1,num2){
//    return num1*num2;
// }
// let res = mul(2,3);//jisne call kiya wha  par 20 ajyega resme store 
// console.log(res);

//2way of making fxn stroing in variable
// const fun1 = function(){
//    console.log("hey")
//    return "raj";
// }
// console.log(fun1())

// arrow function
// let greet = ()=>{
//    console.log("hey")
// }

// greet()

// const sum = (num1 ,num2)=>{
//    return num1+num2 ; 
// }
// console.log(sum(3,3))
// const mul = (num1,num2)=> num1+num2; //single line me pura fxn likh skte h arrow se
// console.log(mul(3,3))
//se how arrow fxn is good 
//  const cube = function(num){
//    return num*num*num 
//  }
//  const cube = (num)=> num*num*num 
//  or if one parameter we dont use braket 
//  const cube = num=> num*num*num
//console.log(cube(8))

//kuch kam ki bat 
//   const sum = function(...number){
//    console.log(number)
//   }
//   sum(2,3,34)

  // (...number ) is rest operator it take value from argument and say rest hojao mere andr 
// let arr = [1,23,45] ; 
//let arr2 = [...arr] it say arr ke are element spread hojao alg alg phir ajao 


let obj = {
   name:"raj" , 
   age:23 , 
   amount : 232
}
//obj destructing we want value from obj name and amount 
//  function fun({name, amount }){
//    console.log({name , amount})
//  }
//  fun(obj)

//here we are checking fxn take obj pass by value or pass by refere. 
// function love (obj1){
//    console.log(obj1.name)
//    obj1.name = "ram"; 
//     console.log(obj1.name)
// }
// love(obj)
// console.log(obj);
// { name: 'ram', age: 23, amount: 232 }
//pass by refrence hua h fxn me obj dalne se

 



