//We will first create a promise
let promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve("Promise resolved")
    }, 2000);
})

//Async Await
async function f() {
    /*await will wait for the promise to get completed - ether resolved or rejected
How much time it should wait - that we specified in the setTimeOut seen above - 2 secs*/
    /*let result = await promise;
    console.log(result);*/


    //For reject scenario you can write it like this
    //We can also use try catch block to ctahc and print the rejection
    try{
        let result = await Promise.reject(("Promise Rejected !!"));
//        console.log(result);
    }catch(error){
        console.log(error);
    }
}


f();