// Classes - Introduced in ES6


//Parent class
class Person{

    constructor(fname, lname, age){
        this.fname = fname;
        this.lname = lname;
        this.age = age;
    }

    //Parent class method
    show(){
        console.log(`${this.fname}  ${this.lname} ${this.age}`);

    }
}

//Creating a Child class 
class Employee extends Person{

    constructor(fname,lname,age,empID,city){
        super(fname,lname,age);
        this.empID = empID;
        this.city = city;
    }

    //Child class method
    show(){
        console.log(`${this.empID} ${this.city}`);
    }

    print(){
        super.show(); //This should call the method of the parent class
        this.show(); //This should call the method within this class
    }

}

var haritha = new Employee("Haritha" , "Dss" , "30" , 123456,"Hyderabad");
haritha.print();


//Variables = var , let and const

function variables(score){
const x = "Hi i am Const";
let y = "Hi i am let";
var z = "Hi i am var";

if(score==2){
    let y = "Hi i am 2";
}

if(score==2){
    var z = "Hi i am not 3";
}

console.log(`${x} ${"***"} ${y} ${"***"} ${z}`);

}

variables(2);