function fetchData(){
    console.log("Fetching data...");
}
setInterval(fetchData , 2000) ;
// callback function is function which is passed as argument to another function and called inside that function
// here fetchData is callback function which is passed to setInterval function and called inside setInterval function every 2 seconds
// setInterval is higher order function which takes function as argument and returns interval id
// similarly setTimeout bhi higher order function h jo ek baar fxn ko call krta h specified time k bad 
// setTimeout(fetchData , 3000) ; //3 sec k bad ek baar fetchData call hoga
// another example of callback function
function names(fun){
    console.log("hello i am names function")
    fun() ; //callback function is called here , greet is stored in fun
}
const greet = function(){
    console.log("hello i am callback function")
}
names(greet) ; //greet is callback function