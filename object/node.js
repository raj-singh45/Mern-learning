// const obj = {
//     name:"raj",
//     account_balance:5000,
//     age:30 ,
//     gender:"male"
// }
// let p= new Object();
// p.name="ravi";
// p.age=25;
// p.account_balance=6000;
// p.gender="male";
// console.log(obj);
// console.log(p); 


//way to generate 
//code reusability 
// class Person {
//     constructor(na, ag, sal){
//         this.name = na; //this.name is key and na is value
//         this.age = ag;
//         this.salary = sal;
//     }
// }
// const person1= new Person("raj" ,23, 5000);
// const person2= new Person("ravi" ,25, 6000);
// console.log(person1);
// console.log(person2);

// const obj1 = {a:1, b:2};
// const obj2 = {c:3, d:4};    
// const obj3 = Object.assign({}, obj1, obj2); //obj1+obj2 ka merge empty obj me jyega phir ye obj3 me dono ka merge obj dikhega
// console.log(obj3);
// console.log(obj1); 
// obj3.name="raj"; 
// console.log(obj3.name);
// console.log(obj1);//obj1 me name key add nhi hoga kyuki obj3 me add kiya h
// //spread operator
// const obj4 = {...obj1, ...obj2};
// console.log(obj4);  

 //assign use case  revision
//  const obj1 = {a:1, b:2};

//  const obj2 = {c:3, d:4};    

//  const obj3 = Object.assign({}, obj1, obj2);
//  console.log(obj3);

//object in js part2 



//deep copy 
// let ob1= {
//     name:"raj", 
//     age:23 ,  

// }

// let obj3 = structuredClone(ob1);
// //separate copy 
// obj3.name="ram"; 
// console.log(ob1.name);   

//nested object 
// const user = {
//     name:"raj" ,    
//     age:23 , 
//     address:{
//         city:"delhi" ,  
//         state:"dl" ,
//         country:"india"
//     }
        
// }
//assign
// const user2 =Object.assign({}, user);
// // console.log(user2);
// user2.address.city="mumbai";
// user2.name="ram";
// console.log(user.address.city);//mumbai  shallow copy hua h assign se nested obj me
// console.log(user.name);//raj top level key me deep copy hua h assign se
// //spread operator
// const user3 = {...user};
// user3.address.state="up";
// user3.name="ravi";
// console.log(user.address.state);//up shallow copy hua h spread se nested obj me
// console.log(user.name);//raj top level key me deep copy hua h spread se
 
// if when we write let obj2 = obj it is pass by reference not pass by value

// destructuring
// let obj  = {
//     name:"raj" ,  
//     age:23 ,
//     amount : 232, 
//     adhar:4567
// }
// const {name ,age}= obj 
// console.log(name , age);
// const {name:username ,age:umar}= obj 
// console.log(username , umar);   //ab hum alag name se value le skte h obj se
//name and age key obj me h but humne username and umar variable me value store krli h
 //we cant acces now name and age variable directly we can acces through username and umar

//  const {name ,age , ...obj1}= obj ; 
//     console.log(name , age);
//     console.log(obj1);
//...rest operator use krke baki value ek alag obj me store krli h


//aray me distructuring revise 
// let arr = [1,2,3,4,5] ;
// const [first , second, , third ]  = arr ; 
// let arr = [1,2,3,4,5] ; 
// const [first , second, ...third ]  = arr ;  
// console.log(first , second ,third);


//nested object me accesing through destructuring 

// let obj  = {
//     name:"raj" ,  
//     age:23 ,
//     arr:[40 ,50 ,30], 
//     address:{
//         city:"delhi" ,  
//         state:"dl" ,    
// }
// }
// }
// const{ address:{city , state }} = obj 
// console.log(city , state ) 
// const {arr:[first]} = obj   ; //arr: likhne par iska obj aa jata h arr: add isme add me arr ka obj chla gya arr: {[first]} = obj  ,  ab array obj se destructure hogya aur arr ka first index ki value first me store hojyegi
// console.log(first)
// const {arr:arr2} = obj ; 
// const [first] = arr2 ;




//object me function 
let user  = { 
    name: "rahu" , 
    amount : 420, 
    greet: function(){
        console.log("heelo rahu ")
    }, 
    meet: function(){
        console.log("hello meet ")
    }
}
user.greet()
user.meet()












