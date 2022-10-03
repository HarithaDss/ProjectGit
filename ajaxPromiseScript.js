//This function will return me one promise
function getPromise(URL) {
    /*We can create promise like this also (without writing return keyword here, in this case, we will return it at the end of the function)
    - which takes a callback function as argument - The callback function will have 2 parameters resolve and reject*/
    let promise = new Promise(function (resolve, reject) {
        //we can use xhr or request - req
        let req = new XMLHttpRequest();

        req.open("GET", URL, true);

        //we can use 'onreadystatechange' event or we can also use 'onload' event {this means when the request is loaded}
        //now this event will fire on the page load and not on button click
        /*Basic difference between above 2 :
        -> onreadystatechange = This event fires when the request state changes in between 0,1,2,3,4 (as seen in previous example)
        -> onload = This event fires when the request loads
        */
        req.onload = function () {
            if (req.status == 200) {
                resolve(req.response);
            } else {
                reject("No response received - Error Encountered !!");
            }
        }
        req.send();
    })
    //Now we will return the promise obj reference
    return promise;
}

//Now we need to define the URL to be used in the above function - Mam was picking some free available APIs from google
const URL = "https://pokeapi.co/api/v2/pokemon?limits=50";

//This function will return a promise
let promise = getPromise(URL);

/*We refer to as Producer and Consumer in the Promises - meaning 
the function where we wrote the Promise is it's producer = 'getPromise'
and the function/variable/const where we use it is it's consumer = let us write it below
*/

const consumer = () => {
    console.log("Consumer function is getting called");
    //arow function used for then() and anonyous function used for 
    promise.then(result => document.getElementById("p1").innerHTML = result)
        .catch(function (error) {
            document.getElementById("p1").innerHTML = error;
        })
}

//Calling this method is way 1 - fetching data from server using xmlhttp
//consumer();

//The same code from 44 can also be written using Fetch - way 2
/*fetch(URL) returns a promise object reference 
 we pass the request's response into then and there by convert it  to JSON format - this will return another promise
 This is a much cleaner way of writing code compared to xmlHTTP written above
*/
console.log("This is fetch Test")
/*fetch(URL).then(response => response.json)
.then(result => console.log(result));*/

//Line 58 is supposed to print the complete array which has name and url details - but what if i just wanted to print only names or only URLs
//(These two lines explained in my OneNOTE - class 8)   
fetch(URL).then(response => response.json())
.then(function(result){
    console.log(result);
}).then(result => console.log(result.results.map(r => r.name)));

//Above we can see 2 ways of sending request to server and get response -> XMLHTTPRequest and Fetch api

//Async Await - better and upgraded version of Promise
