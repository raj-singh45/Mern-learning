const obj = {
    name:"raj",
    account_balance:5000,
    age:30 ,
    gender:"male"
}
console.log(obj["gender"]);

//way to generate 
class Person {
    constructor(na, ag, sal){
        this.name = na;
        this.age = ag;
        this.salary = sal;

    }

}
const person1= new Person("raj" ,23, 5000);
const person2= new Person("ravi" ,25, 6000);
console.log(person1);
console.log(person2);
