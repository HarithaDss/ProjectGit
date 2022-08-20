//THIS IS A COMMENT IN THE .JS FILE

//JAVASCRIPT CLASS***
//We created this file to write all the JS related code and content - this file is given as input in the Script tag of the firstWebPage.html file

//0.1 This line is picked from firstWebPage.html and pasted here - it will still reflect in the browser and script.js is mentioned in the firstWebPage.html under script tag
document.getElementById("p1").innerHTML = "Text updated in the script.js file";

//0.2 -> variables {using Var is not recommended though in JS}
var x = 10; // No need to define the data type in js - it will take from the value itself
var y = 20;
var z = 30;

x == y; // this will return true or false boolean which can be used in if loops


//0.3 Console statements 

//0.4 Writing a function - similar to Java methods
function show() {
    /*
    var x = 10;
    var y = 5;

    //This statement will print in the console tab under inspect element - on the button click -  as we have included it in the show method
    console.log("Console statement --> Value of x is : " + x);

    //This statement alone will display int he page - on clicking the button as we are having it in the show method
    // document.write("This statement alone is displaying in the document on clicking the button!!");

    //We will call the below method here : - it will print in the console on button click
    console.log("addNum method has returned = " + addNum(100.4, 100.6));

    //We can also print it in the document itself
    document.getElementById("p2").innerHTML = addNum(100, 120);

    //Conditional statement 
    if (x < y) {
        alert("X and Y are compared and the former is lesser")
    } else {
        alert("X and Y are compared and the latter is lesser")
    }

    //loops
    //var - function scoped
    for(var i=0 ; i<=5 ; i++){
        console.log("for var - The value being printed is :- " + i);
    }

    console.log("For var - After the for loop , i is now :- " + i);

    //let - Block scoped
    for(let j=0 ; j<=5 ; j++){
        console.log("For let - The value being printed is :- " + j);
    }

    console.log("for let - After the for loop , j is now :- " + j);
    */

    //Creating object using Const
   /* const personDetails = {
        name: "Haritha",
        age : 31,
        eat : function(){

            console.log(this.name + " is eating food" )

            //We can instead the below string template to print the name and do away with concatenation
            console.log('${this.name} is eating food');
        }

    }

    //To access the method written for the object :
    personDetails.eat();
    //To access the property written for the object :
    console.log(personDetails.age);
    */

    //Printing only the properties using a for loop
    const personDetails2 = {
        fname: "Haritha",
        age : 31,
        lname : "dss"
    }

    console.log("Printing the person properties with their values :- ");
    for(let x in personDetails2){
        //prints the property adn its corresponding value
        console.log(personDetails2[x]);
    }

    console.log("Printing just the person properties  :- ");
    for(let x in personDetails2){
         //prints only the property - we generally dont need this alone
         console.log(x);
    }


}

//0.5 Refresh the webpage now to see this line added next to the button 
document.write("This statement is printing content after the button!!");

function addNum(num1, num2) {
    var num3 = num1 + num2;
    return num3;
}

//0.6 Operations
y - z;
y + z;
y * z;
y / z; //yand z are operands and the symbol is called operator 

//0.7 Operator +
var x = 10;
var y = 20;
sum = x + y //This will show 30 x and y as they are integers

var x = "10";
var y = "20";
sum = x + y // This will show 1020 as x and y are strings now - they are concatenated

//1. Conditional statement
if (x == y) {
    alert("X and Y are equal");

}

//2. Writing Function - looking similar to Java method
function sum2(num1, num2) {
    var num3 = num2 + num1;

    return num3;
}

var result = sum2(2, 3);

//3. Creating Object - No need to specify data type, we give object details within curly braces
var object1 = {
    fname1: "Haritha",
    lname1: "dss",
    age1: 30,
    address1: "Hyderabad",
    mobile1: 1234567891,
    mobile2: 1987654321,

}

var object2 = {
    fname2: "Dinesh",
    lname2: "Cheruvu",
    age2: 30,
}

//4.  We can replace creating multiple objects as seen in point 3 with a constructor function - Starts with capital letter
function Person(fname, lname, age, address, mobile1, mobile2) {
    var person = {}; // similar to this keyword in java, creating empty object

    person.fname = fname;
    person.lanme = lname;
    person.age = age;
    return person;
}

//Java script is case sensitive - person and Person are not the same
var haritha = Person("Haritha", "Dss", 30, "Hyd", 1234567891, 1987654321);
//haritha.fname;

//Else we can just use the this keyword as we do in Java
//Point 4 will now change like
function Person(fname, lname, age, address, mobile1, mobile2) {
    var person = {}; // similar to this keyword in java

    this.fname = fname;
    this.lanme = lname;
    this.age = age;
}
