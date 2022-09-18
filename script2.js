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

//Passing function as an argument into another function 
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
console.log(ref.text); 

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

We can either pass the function reference in getTodo or we can directly define the function itself as its argument 
getTodo(function print(data){    --> we can remove the name 'print' also -> it is called anonymous function
    console.log(data.text);
});*/

//--->ForEach in arrays<----
//Let us first define an array
let arr3 = [1, 2, 3, 4, 5];

//It can take 3 parameters - value , index , array, we are giving one now
/*function myFunction(value,index,array){
    //So for each element in the array this function will get executed - i.e. it will print all the values, index places in the array
    console.log(value);
    console.log(index);
    console.log(array);
}

//For each element in arr3 , i want myFunction to get executed - This will print the values as needed
arr3.forEach(myFunction);*/

//Map function
/*function mapFunction(value){
    return value * 3;
}

//What we are doing here -> we are performing arr3*3 for all its elements and storing these new values to another array arr3Ele
let arr3Ele = arr3.map(mapFunction);
//printing it
for (let i = 0 ; i < arr3Ele.length ; i++){
    console.log(arr3Ele[i])
}

//or i can print it simply like this also
console.log(arr3Ele);

//We can do method chaining also like this
//arr3Ele.forEach(myFunction); //OR Just say
arr3.map(mapFunction).forEach(myFunction);*/

/*We can modify the above line 222 and show all the concepts in one place
Method chaining + passing the function directly in the argument instead of it's reference + anonymous function */
//So with just an array defined as pere-requisite, we can achieve all the above mentioned in single coding
/*arr3.map(function(value){
    return value*3;
}).forEach(function(value,index,array){
    console.log(value);
    console.log(index);
    console.log(array);
})*/


//Arrow functions

//See the basic function example and see how will change it step by step
/*const addNum = function(num1,num2){

    return num1+num2;
}
console.log("The sum is :- "+ addNum(2,3));*/

/*
Now let us replace function keyword with =>
remove the {} as there is only one line in the function
remove 'return' keyword as arrow function by default returns value if there is single statement in the function
*/
/*const addNum1 = (num1,num2) =>  num1 + num2;
console.log("The sum is :- " + addNum(3,4));

//if there is only ONE parameter, then we can remvoe () also
const prodNum = num => num*4;
console.log ("The product is :- " + prodNum(4));*/


//Closures
/*function greeting() {

    //Functions are also treated as variable - so we can call them / we can return them inside another function
    function print() {

        console.log("Hello how do you do");
    }

    print();
}
greeting();*/

//Returning multiple functions at one go by referring to their objects
function numGame(num1, num2) {
    console.log("We are performing operations on :- "  + num1 + " " + num2)
    return {
        sumObj: function () {
            console.log(num1 + num2)
        }, proObj: function () {
            console.log(num1 * num2)
        }, divObj: function () {
            console.log(num1 / num2)
        }, subObj: function () {
            console.log(num1 - num2)
        }
    }
}

/*The returned value needs a reference to be stored in - you cannot just call the function , we should 
also reference it to a variable so that the return value is stored*/
let result = numGame(10,5);
result.sumObj();
result.divObj();



