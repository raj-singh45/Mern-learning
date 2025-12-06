// let arr = [10,20,30,40,50] ;
// arr.forEach(function(num){
//     console.log(num)
// })
//10 ko num me lekr console krdegaga , phir 20 ko , phir 30 ko 
// forEach me hum index bhi le skte h second parameter se
// arr.forEach(num=>{ console.log(num)})
//agar index bhi chahiye to
// arr.forEach((num , index ,arr)=>{
//     console.log(num,index, arr)
// })
//index is 0 and value is 10
//index is 1 and value is 20
//index is 2 and value is 30
//index is 3 and value is 40
//index is 4 and value is 50

//1st argument me value , 2nd me index , 3rd me pura array
// arr.forEach((num , index, a)=>{
// a[index] = num*2 ;
// })
// console.log(arr) ;
//[20, 40, 60, 80, 100]
//arr ke sare element 2 se multiply ho gaye
// arr.forEach(callback)

//clean code 
// function greet(num){
//     console.log(num)
// }
// arr.forEach(greet) //but dev prefer argument me pura fxn likho

//filter
//return me true/false 
//agar true aya to print/select  false aya to reject
// let arr = [10,22,33,43,50] ;
// const res= arr.filter((num , index , array)=>{
//     return num%2==0  
// })
// const res= arr.filter((num)=>num%2==0 ) //return bydefault hoga {}, return ki bhi need ni h  
// console.log(res)
// const student = [
//     { name: "rohan", age: 12, marks: 31 }, //obj
//     { name: "mohan", age: 32, marks: 40 },//obj
//     { name: "raj", age: 22, marks: 98 },//obj
//     { name: "shiv", age: 43, marks: 67 },//obj
//     { name: "aru", age: 44, marks: 33 },//obj
// ]

// const result = student.filter((value)=> value.marks > 50 )
// const result = student.filter(({marks})=> marks > 50 ) //same result 
// parameter me object to aa hi rha to chhota bnane ke liye hum obj kon destructre krliye 
// [
//   { name: 'raj', age: 22, marks: 98 },
//   { name: 'shiv', age: 43, marks: 67 }
// ]

// console.log(result)

//map 
//isme array ko modify kr skte h  
// const arr = [1,2,3,5]
//  let res = arr.map((num)=> num*num) ;
//  console.log(res) ;
//  [ 1, 4, 9, 25 ]
//forEach return ni krta map, filter return krte h '
// let res = arr.forEach(())//wrong errror

//filter +map 
// const arr = [1,2,3,4,5,6] ; 
// const result = arr.filter((num)=> num%2==0).map((num)=> num*num) // array me filter lga return 2,4,6 ye num par map lga as parameter then num*num hua iska answer result me agyua 
// const after = arr.filter((num)=> num%2==0).map((num)=> num*num).map((num)=> num/2)
// console.log(result , after) ; // result [ 4, 16, 36 ] after [ 2, 8, 18 ]