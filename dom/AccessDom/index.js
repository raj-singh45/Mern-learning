// css selector
//querySelector
// const id  =document.querySelector('#first') ;
// id.innerHTML = "kya haal hai";
// const id2 = document.querySelector('.header2') ;
// id2.style.backgroundColor = 'pink'

// const name  = document.querySelector('.header1')
// const obj = document.querySelectorAll('.header1')
// name2.style.backgroundColor="blue" ;


//how to iterate over node list
// const obj = document.querySelectorAll('.header1')
// //forEach
// obj.forEach((val)=>{
//     console.log(val)
// })

// //for loop
// for(let i = o ; i<obj.length ; i++){
//     obj[i].style.color ="blue" ; 
// }

// //for OF  loop
// for (let val of obj){
//     console.log(val)
// }


//convert nodelist into array 
// Array.from(obj)

//element select =>
// let obj2 = document.querySelectorAll('li') ; 
// let obj3 = document.querySelector('ul li')
// let obj3 = document.querySelectorAll('ul li')

// ********************************************************************************************
//Accesing by tag name 

//  const h1 = document.getElementsByTagName('h1') ;//it give html colection
//   const tem= document.getElementsByTagName('li') ;//it give html colection
//   console.log(tem[0]) //cn and so on 
//how to iterate over it 
//   for (let i = o ; i< tem.length ; i++){
//     tem[i].style.color="black"; 
//   }
//forOF 
// for(let val of tem){
//     console.log(val)
// }
  //forEach => convert into array first 
//   Array.from(tem).forEach((val)=>{
//     console.log(val)
//   }) ; 


// ***************************************************************
//   Accesing using relationship 
//   a. Parent node 
//   Method: element.parentNode or element.parentElement
//   Description: Access the immediate parewnt of an element . 

// use case =>
// parent dhudho jo select kiye ho 
const li = document.querySelector('li') ; 
console.log(li.parentElement) ;  //html element /[collection]
console.log(li.parentNode); //nodeList 

//  b. Child Node 
//   Method: element.childNode (include textNode) or element.children(only element nodes)
//   Description: Acces all child nodes of an element . 
const ul = document.querySelector('ul') ; 
// console.log(ul.childNodes) // textnode(emptyspace , comments , text ) bhi aa jyenge erxtra 
// console.log(ul.childElement)  //only html element come 
console.log(ul.firstChild);
console.log(ul.firstElementChild);//gurantee html element 


//extra stuff 
//innerHtml => pura html dega tag ke andr content ke sath
//textContent => pura text dega particular tag ka bina html tag ke aur agr display none bhi hua to phir bhi text show krega 
//innertext => jo screen me visible hoga whi text dega display none ko ni dikhayega 










 





