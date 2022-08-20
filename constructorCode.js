
//1. Constructor declaration
function PersonDetails(name, age){
    let person = {} //Created an empty object

    //this keyword refers to the current object under focus - whhen we call the constructor
    this.name = name;
    this.age = age ;

    this.eat = function(){
        console.log(this.name + " is eating food" );
    }

}

//2. Creating an object using the Constructor call
const person1 = new PersonDetails("Haritha Dss",31);
person1.eat();

//Create another object using this constructor
const person2 = new PersonDetails("Surya",27);
person2.eat();
person2.name;

