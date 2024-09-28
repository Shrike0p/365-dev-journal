/**
 * What does Synchronous mean?
 * Together, one after the other, sequential. Only one thing is happening at a time
 * 
 * What does asynchronous mean ?
 * opposite of synchronous, happens in parts. Multiple things are context switching with each other
 * 
 * Till now we have seen all synchronous functions and thiings 
 * 
 * 
 * Async Functions:-
 * SetTimeout(fn,seconds)
 * so what happens is the other task is being run in between the settimeout works out.
 * 
 */

function findsum(n){
    let ans=0;
    for(let i=0;i<n;i++){
        ans+=i;
    }
    return ans;
}

function findSumtill100(){
    console.log(findsum(100));
}

//busyWaiting-->so if we ran syncsleep instead of settimeout it will work as synchrounsly and then print hello world
function syncSleep(){
    let a=1;
    for(let i=0;i<1000000;i++){
        a++;
    }
}


setTimeout(findSumtill100,1000);
console.log("Hello World");   //--> if we ran settimeout above then it will print this first then 4950 which is the sum after 1 seconds


//what are common async functions ?
/**
 * setTimeout
 * fs.readFile:- to read file from your filesystem
 * Fetch:- to fetch some data from an API endpoint
*/

//reading a file

const fs=require("fs")

fs.readFile("index.txt", "utf-8", function(err,data){
    console.log(data);
})

console.log("hi there"); //--> it will be printed first then the data of the file will be printed

//2nd case

fs.readFile("index.txt", "utf-8", function(err,data){
    console.log(data);
})

console.log("hi there");

for (let i=0;i<1000000000;i++){
    a++;
}

console.log("Hello there 2");

//so what will happen here is the output would look alike 
//Hello there
//Hello there 2
//file data
//this is because it hold the context and once the loop end it prints the hello there 2 then the data of the file.

//Event loop :- basically it checks if the thread is free then it will take out the function or task from the call back queue

//example

setTimeout(function(){
    console.log("Executed");
},2000)


for(let i=0;i<10;i++){
    a++;
}

console.log(a);

/**
 * Workflow of the above code
 * So what gonna happen is settimeout will go to web api and it will start it's clock for 20 seconds, in the mean while the callstack 
 * will work on the for loop and try to complete it's operation, let say the operation of settimeout got finished it will be snet 
 * to the callbackqueue, now the settimeout function will wait in callback queue until the thread gets free i.e. complete the process 
 * of for loop, once it get completed the event loop will run and grab that function from callback queue and put it in call stack.
 */


//-----------------------Promises---------------------------

function findSum(n){
    let ans=0;
    for(let i=0;i<n;i++){
        ans+=i;
    }

    return ans;
}

function findSumtill100(){
    return findSum(100);
}

setTimeout(findSumtill100,1000);
console.log("Hello World");

//The above code is ugly, hence promises are syntactical sugar that make this code slightly more readable.

//Until now, we've only used other people's asynchronous functions, How can we create an asynchronous function of our own ?


function PrakharReadFile(cb){
    fs.readFile("index.txt", "utf-8", function(err, data){
        cb(data);
    })

}

function ondone(data){
    console.log(data);
}

PrakharReadFile(ondone);


//So if you see above it's just a wrapper on top of another async functions, which is fine. Usually all async functions you will write 
//will be on top of js provided async functions like setTimeout or fs.readfile.

//applying promises on the above code

function PrakharRead(){
    return new Promise(function (resolve){
        fs.readFile("index.txt", "utf-8", function(err, data){
            resolve(data);
        })
    })
}


function onDone(data){
    console.log(data);
}

PrakharRead().then(onDone);

//so if you see here we didn't have to pass any variable to Prakhar Read function. 
