//Promise
function sampleTest(name) {
    return new Promise(function (resolve, reject) {
        if (name == "Haritha")
            resolve("Promise Resolved")
        else
            reject("Promise Rejected")
    })
}

//The above code will return a Promise object, how will we call it now
sampleTest("HarithaD").then(function (value) {
    console.log("Test Name is :- " + value)
}).catch(function (value) {
    console.log("Incorrect data passed :- " + value)
})

