//AJAX call to server
function getData() {
    //We will now create an xmlHTTp request and send it  to the server
    //xhr = XML http request
    var xhr = new XMLHttpRequest();

    //We will create one URL also - we have some inbuilt API URLs online for free - They provide some JSON data
    //We will use on famous and commonly used URL below 
    //If we had our own node created server running on our machine, then we would have given its URL here - we do not have one now, so we are using a common example from online
    var url = "https://jsonplaceholder.typicode.com/todos/1";

    //setting the request object - using GET call ; passing this request object to the server URL ; True/False is to define if the call should be asynchronous or no - we gave true as we want the call to be async
    xhr.open("GET", url, true);

    //The request obj is created successfully and ready - now we fire an event 'onreadystatechange' 
    xhr.onreadystatechange = function () {

        //I want the data to be displayed on the webpage only if i received response data from the server - so we give readyState == 4 
        /*There are 5 values of a ReadyState -> whenever the request state is changed, we fire this event
        0 -> Request object is not yet initialized {This is not our case as we have already initialized}
        1 -> Server connection established 
        2 -> Server has accepted our request
        3 -> Server is processing our request
        4 -> Request is finished and response is ready to be received from the server
        */
        //When server sends the response , it sends along one response code also - a meaningful message is attached to this by dev team and displayed
        /*Response codes  series :
        100 -> 
        200 -> OK, successful
        300 ->
        400 -> Issue with request
        500 -> Issue with Server
        */

        //this keyword here refers to the request object ref which we initializeds
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("p1").innerHTML = this.responseText;
        }

    }

    //Finally we are sending the request
    xhr.send();
}