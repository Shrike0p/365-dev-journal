//WAP to greet a person given their first and last name 

let a="M"

if(a==="M"){
    console.log("You are male");
}else{
    console.log("You are female");
}


/**
 * Integer:- let a=2
 * String:- let b="Prakhar"
 * Boolean:-  let c=true;
 */


/**
 * Loops
 */

let ans=0;
for(let i=0;i<100;i++){
    ans+=i;
}

/**
 * Arrays 
 */

const arrays =[21,22,23,24];


const personarray=["Prakhar", "Abhimanyu", "Paritosh", "Pratyay"];
const gender= ["Male", "Female", "Male", "Female"]

for(let i=0;i<personarray.length;i++){
    if(gender[i]==="Male"){
        console.log(personarray[i]);
    }
}

/**
 * Objects:- Combining values all together 
 */

const allusers={
    firstname:"Prakhar",
    gender:"Male"
}

//objects of arrays

const allusers1=[{
    firstname:"Prakhar",
    gender:"Male"
},{
    firstname:"Prakhar",
    gender:"Male"
},{
    firstname:"Prakhar",
    gender:"Male"
}]

//accesing 
allusers["firstname"]
allusers.firstname

for(let i=0;i<allusers.length;i++){
    if(allusers[i]["gender"]=="Male"){
        console.log(allusers[i]["firstname"]);
    }
}

//functions
function sum(a1,b1){
    return a1+b1;
}

console.log(sum(1,2));

//anonymous functions: those functions which don't have their own names
console.log(function (n){
  return n*n;
})

//callback function

function sum1(num1, num2, fnToCall){
    let result = num1 + num2;
    fnToCall(result);
}

function displayResult(data){
    console.log("The sum of the 2 numbers is: " + data);
}

sum1(2, 3, displayResult);



function CalculateArith(a,b,type){
    if(type=="sum"){
        return a+b;
    }else if(type=="minus"){
        return a-b; 
    }
}

let ans12=CalculateArith(1,2,"minus");
console.log("The value is "+ans12);

//String
// String handbook

// String: length, indexOf(), lastIndexOf(), slice(), substring(), replace(),
// split(), trim(), toUpperCase(), toLowerCase(), etc.

// Run each function to see the output, play and learn by doing.

// Length
function getLength(str) {
    console.log("Original String:", str);
    console.log("Length:", str.length);
  }
  getLength("Hello World");
  
  // indexOf
  function findIndexOf(str, target) {
    console.log("Original String:", str);
    console.log("Index:", str.indexOf(target));
  }
  findIndexOf("Hello World", "World");
  
  // lastIndexOf
  function findLastIndexOf(str, target) {
    console.log("Original String:", str);
    console.log("Index:", str.lastIndexOf(target));
  }
  findLastIndexOf("Hello World World", "World");
  
  // slice==basically here we give start index and till the end index it will give the string in between
  function getSlice(str, start, end) {
    console.log("Original String:", str);
    console.log("After slice:", str.slice(start, end));
  }
  getSlice("Hello World", 0, 5);
  
  // substring==basically here we give start index and the size of the string so let say 2,5 so it start from 2 to 5.
  function getSubstring(str, start, end) {
    console.log("Original String:", str);
    console.log("After substring:", str.substring(start, end));
  }
  getSubstring("Hello World", 0, 5);
  
  // replace
  function replaceString(str, target, replacement) {
    console.log("Original String:", str);
    console.log("After replace:", str.replace(target, replacement));
  }
  replaceString("Hello World", "World", "JavaScript");
  
  // split
  function splitString(str, separator) {
    console.log("Original String:", str);
    console.log("After split:", str.split(separator));
  }
  splitString("Hello World", " ");
  
  // trim==trim out from start and begining 
  function trimString(str) {
    console.log("Original String:", str);
    console.log("After trim:", str.trim());
  }
  trimString(" Hello World ");
  
  // toUpperCase
  function toUpper(str) {
    console.log("Original String:", str);
    console.log("After toUpperCase:", str.toUpperCase());
  }
  toUpper("Hello World");
  
  // toLowerCase
  function toLower(str) {
    console.log("Original String:", str);
    console.log("After toLowerCase:", str.toLowerCase());
  }
  toLower("Hello World");


//-------------------------------------------------Numbers----------------------------------------------
  function explainParseInt(value) {
    console.log("Original Value:", value);
    let result = parseInt(value);
    console.log("After parseInt:", result);
  }
  
  // Example Usage for parseInt
  explainParseInt("42");
  explainParseInt("42px");
  explainParseInt("3.14");
  
  function explainParseFloat(value) {
    console.log("Original Value:", value);
    let result = parseFloat(value);
    console.log("After parseFloat:", result);
  }
  
  // Example Usage for parseFloat
  explainParseFloat("3.14");
  explainParseFloat("42");
  explainParseFloat("42px");

  //parseInt won't work on assasasd42asdasdsad, but it will work on 42asdsadsa



  //---------------------------------------Arrays-----------------------------------------------------
  // Array handbook

// Array:   push(), pop(), shift(), unshift(), splice(), slice(),
// concat(), forEach(), map(), filter(), reduce(), find(), sort()

// Run each function to see the output, play and learn by doing.

// push()--> it add the number at the last
function pushExample(arr, element) {
    console.log("Original Array:", arr);
  
    arr.push(element);
    console.log("After push:", arr);
  }
  pushExample([1, 2, 3], 4);
  
  // pop()--> it remove the element from the back 
  function popExample(arr) {
    console.log("Original Array:", arr);
  
    arr.pop();
    console.log("After pop:", arr);
  }
  popExample([1, 2, 3]);
  
  // shift()--> it pop out from the front
  function shiftExample(arr) {
    console.log("Original Array:", arr);
  
    arr.shift();
    console.log("After shift:", arr);
  }
  shiftExample([1, 2, 3]);
  
  // unshift()--> it put something in front of the array 
  function unshiftExample(arr, element) {
    console.log("Original Array:", arr);
  
    arr.unshift(element);
    console.log("After unshift:", arr);
  }
  unshiftExample([1, 2, 3], 0);
  
  // concat()--> merge two arrays
  function concatExample(arr1, arr2) {
    console.log("Original Arrays:", arr1, arr2);
  
    let arr3 = arr1.concat(arr2);
    console.log("After concat:", arr3);
  }
  concatExample([1, 2, 3], [4, 5, 6]);
  
  // forEach()--> it do not return anything
  function forEachExample(arr) {
    console.log("Original Array:", arr);
  
    arr.forEach(function(item, index) {
      console.log(item, index);
    });
  }
  forEachExample([1, 2, 3]);
  
  // map()
  function mapExample(arr) {
    console.log("Original Array:", arr);
  
    let newArr = arr.map(function(item) {
      return item * 2;
    });
    console.log("After map:", newArr);
  }
  mapExample([1, 2, 3]);
  
  // filter()
  function filterExample(arr) {
    console.log("Original Array:", arr);
  
    let newArr = arr.filter(function(item) {
      return item > 3;
    });
    console.log("After filter:", newArr);
  }
  filterExample([1, 2, 3, 4, 5]);
  
  // find()
  function findExample(arr) {
    console.log("Original Array:", arr);
  
    let found = arr.find(function(item) {
      return item > 3;
    });
    console.log("After find:", found);
  }
  findExample([1, 2, 3, 4, 5]);
  
  // sort()
  function sortExample(arr) {
    console.log("Original Array:", arr);
  
    arr.sort(function(a, b) {
      return a - b;
    });
    console.log("After sort:", arr);
  }
  sortExample([5, 2, 3, 4, 1]);