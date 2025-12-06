//for in loop hum array ke sath ni lete 
//arr is object 
// 0:1, 
// 1:20 ,
// 2:12 ,
// 3:30 ,
// name:"rahi" 
// for in loop har  key ke pas jyega agr enumerable true  h to key ko print krdega simple work 
// array me hum for in loop use ni krte kyuki array bhiu at the end object hai aur for in loop array ke index ko key smjhega aur print krega aur agar hum usme string store kre arr.name = "rahi" ko iska print name rahi print krega ana ki 4 :rahi 
const arr=[10,20,12,30];
arr.name ="rahi" ;
for (let key in arr){
    console.log(key , arr[key])
}
// 0 10
// 1 20
// 2 12
// 3 30
// name rahi
arr.age = 20 ;
for (let index= 0 ; index <arr.length ; index++){

console.log(index ,arr[index])
}
// 10
// 20
// 12
// 30
// ❗But "rahi" print nahi hoga kyunki
// for...of sirf array ke indexed items (0,1,2,3) ko iterate karega,
// custom properties ko nah