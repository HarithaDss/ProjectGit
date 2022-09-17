// Classes - Introduced in ES6


//Parent class
/*class Person{

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
    var z = "Hi i am not 3";
}

console.log(`${x} ${"***"} ${y} ${"***"} ${z}`);

}

variables(2);*/

//Arrays - Way1
/*let arr1 = [1, 2, 3];
console.log(arr1[3]);

//Way2
let arr2 = [];
arr2[0] = 1;
arr2[1]=2;

//Using For loop to print the array elements - Simplest way
for(var i=0 ; i<=arr1[i] ; i++){
    console.log(arr1[i])
}

console.log("********");

//Array Methods
//push
arr1.push(4);
console.log(arr1);

//pop
arr1.pop();
console.log(arr1);

//Shift
arr1.shift();
console.log(arr1);

//Delete
delete arr1[0]
console.log(arr1);

//Unshift
arr1.unshift(5);
console.log(arr1);


//typeof operator
console.log(typeof (3))
console.log(typeof ("Sudha"))
console.log(typeof (false));
console.log(typeof (arr1));

function name() {
    console.log("This is my Name Haritha");
}
name();
console.log(typeof (name))

//Passing function as an arument into another function 
function printValue(val1, val2) {
    val1(3, 4);
    val2(3, 4);
}

//function 1
function sum(num1, num2) {
    console.log("Sum of the 2 numbers given is :-" + (num1 + num2))
}

//function 2
function product(num1, num2) {
    console.log("Product of the 2 numbers given is :- " + num1 * num2)
}

printValue(sum, product);*/

//setTimeOut function
/*function first() {
    setTimeout(function () { console.log("Print 1"); }, 5000);
}

function second() {
    console.log("Print 2");
}

first();
second();

//Now implementing callBack feature --> using the second method as argument for first
//By doing this we are telling the control to first wait for the DB data fetch, execute those related methods which are in the lead and 
//then go for the second method which is following - Instead of jumping to the next method 
//Parameter name can still be callback also -> Remember callBack is not a keyword
function first(callback) {
    setTimeout(function () { console.log("Print 1"); callback(); }, 5000);
}

function second() {
    console.log("Print 2");
    //    setTimeout(function () { console.log("Print 2"); }, 3000);
}

//1. Function being passed as argument
first(second);

//2. Function being assigned to a variable
const getTodo = function () {
    setTimeout(function () {
        //Json data - format for data interchange ; java script object notation
        return { text: "My name is Haritha" };

    }, 2000);
}

//This will thow error - as there is no callback implemented
var ref = getTodo();
console.log(ref.text); */

//How to correct the above example 2 to print without error - applying callback feature
//Here we are passing a JSOn object as argument to the call back
const getTodo = function (callback) {
    setTimeout(function(){console.log("My name is Haritha"); callback({text : "This is my program"});}, 2000);
}

//We can take obj parameter in this method
function print(data){
    console.log(data.text);
}

getTodo(print);

