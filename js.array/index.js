// let marks = [ 22,23,24,56,77,5,34];
// console.log(marks);
// console.log(marks.length);
// let arr= [ 1,2, "raj" , true] 
// console.log(arr[0]);
// arr[0]= 23 ; //aray are mutable

//insert into end 
// arr.push("king") ;
// console.log(arr);
// arr.pop(); // Delete from end pop from last but main array me sideaffect ni ayega
// console.log(arr);


// shift and unshift mat use kro adviseble ni h system performance down
//more shifting execute if n size array n time shift
//insert from start 
// arr.unshift(10);
// console.log(arr)
// //delete from start
// arr.shift();
// console.log(arr) ;


// let arr=[10,20,30,50,90];
// for(let i = 0 ; i<arr.length ; i++){
//     console.log(arr[i]); 
// }
// for(let num of arr){
//     console.log(num); 
// }

//arrays copy by reference 
// let arr=[10,20,30,50,90];
// let arr2 = arr ;
// arr2.push(10);
// console.log(arr);
  

//slice  
//original array me changes ni ayenge 
// let arr=[10,20,30,50,90];
// console.log(arr.slice(0,3));

//splice se original array me changes ayenge bhai 
//  let arr=[10,20,30,50,90];
//  .splice() mtlb array se trim out krdo
//  .splice(konse index se , kitne element chahiye)\
// console.log(arr.splice(2,3)) ;
// [ 30, 50, 90 ]
// console.log(arr);
// [ 10, 20 ]
 //extract with insert using splice 
//   let arr=[10,20,30,50,90];
//   console.log(arr.splice(1,2, "Rohit" , 19 , "Raj")) ;
//   [ 20, 30 ]
//   console.log(arr) ;
//   [ 10, 'Rohit', 19, 'Raj', 50, 90 ]

//spread operator
//own doing
//  let arr=[10,20,30,50,90];
//  let arr2 = [...arr] ; 
//  arr[2]= 100; 
//  arr.shift() ;
//  console.log(arr)
//  console.log(arr2) ;
//coder baba 
// const arr=[10,20,40,50,60,11] ;
// const arr2 = ["raj" ,13 ,true ]; 
// const arr3 = [...arr, ...arr2] ;
// console.log(arr3);
// teeno aray individually ek aray me store hojyegi 
// [
//   10,    20, 40,
//   50,    60, 11,
//   'raj', 13, true
// ]

//join
//ye array ko string me badalta h iske (deliminator) ke bais pr
// const names = [ "raj", "ram" ,"rahul"] ;
// console.log(names.join(" - "))
// raj - ram - rahul
// console.log(names.join( " @ "))
// raj @ ram @ rahul

//simple searching indexof(first occurance ) lastindexOf includes

//sort 
//1st character ke basis pr acc to asci table
//reverse ulte order me 
//bada phle chota bad me 
// arr.sort();//asci table ke rule pr arrange honge
// arr.reverse();
// const arr=[ 100,2,50,9,400,3000,4500,600] ;
// const arr2 = arr;
// const sirf variable ka reference change nahi hone deta,
// lekin array ke andar ke values ko change karne deta hai.
// arr2[0]= 9999 ;
// console.log(arr) ;
// console.log(arr2) ;

//destructuring
// const arr=[ 100,2,50,9,400,3000,4500,600] ;
// const [ first, second, , fourth ] = arr ; //3rd ko skip krdia
// console.log(first, second, fourth) ; //100 2 9








 