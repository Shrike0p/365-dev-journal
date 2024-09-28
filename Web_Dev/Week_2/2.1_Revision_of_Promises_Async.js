//Discuss the Callbacks, Async Functions, promises, JS Function(map, filter), Assignment

function square(n){
    return n*n;
}

function cube(n){
    return n*n*n;
}

function SumofSomething(a,b, fn){
    let value1=fn(a);
    let value2=fn(b);
    return value1+value2;
}

let ans=SumofSomething(1,2,cube);
console.log(ans);



/***
 * if you have 10 different synchronous function calls so all 10 of them will run then event loop will drag the async call
 * Promises are a syntactical sugar on top of async, under the hood promises get converted into callbacks
 * 
 * How could you create your own async functions ?
 * 
 */

//Approach #1 (Wrapping another async fn)
function myOwnTimeout(fn, duration){
    setTimeout(fn,duration);
}

myOwnTimeout(function(){
    console.log("hi there");
}, 1000)

//This approach uses a callback, You have created a function where other people can send a callback. This is good, but could lead
//to callback hell.

setTimeout(function(){
    console.log("Hello There it is what it is");

    setTimeout(function(){
        console.log("Prakhar This Side")
    },2000)
},1000)