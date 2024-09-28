
class Animal {
    constructor(name, legCount) {
      this.name = name
      this.legCount = legCount
    }
    describe() {
      return `${this.name} has ${this.legCount} legs`
    }
  }
  
//static functions aren't asscoaited with objects, these are associated to the class itself, so basically you can call static functions 
// with class itself, but you can't call non static function with class itself 

class Animal {
    constructor(name, legCount, speaks){
        this.name=name;
        this.legCount=legCount;
        this.speaks=speaks;
    }

    static myType(){
        console.log("Animal")
    }

    speak(){
        console.log("Hii there "+this.speaks);
    }
}

console.log(Animal.myType());   //--> you can see a class can call up mytype easily.
console.log(Animal.speak());   //--> it will give an error as it can't call the non static function directly using class
let dog=Animal("dog", 4,"bhow bhow");
let cat =Animal("cat", 4,"meow meow");

cat.speak();


//------------------------Date--------------------------------
function dateMethods() {
    const currentDate = new Date();
    console.log("Current Date:", currentDate);
  
    // Getting various components of the date
    console.log("Date:", currentDate.getDate());
    console.log("Month:", currentDate.getMonth() + 1); // Months are zero-indexed, so adding 1
    console.log("Year:", currentDate.getFullYear());
    console.log("Hours:", currentDate.getHours());
    console.log("Minutes:", currentDate.getMinutes());
    console.log("Seconds:", currentDate.getSeconds());
  
    // Setting components of the date
    currentDate.setFullYear(2022);
    console.log("After setFullYear:", currentDate);
  
    currentDate.setMonth(5); // Setting month to June (zero-indexed)
    console.log("After setMonth:", currentDate);
  
    // Getting and setting time in milliseconds since 1970
    console.log("Time in milliseconds since 1970:", currentDate.getTime());
  
    const newDate = new Date(2023, 8, 15); // Creating a new date
    console.log("New Date:", newDate);
  }
  
  // Example Usage for Date Methods
  dateMethods();

  //one usecase is 
  function Calculatesum(n){
    let a=0;
    for(let i=0;i<n;i++){
        a+=1;
    }
    return a;
  }

  const beforeDate=new Date();
  const beforetimeinMs=beforeDate.getTime();
  Calculatesum();the dataset

const afterDate=new Date();
const aftertimeInMs=afterDateInMs.getTime();

console.log(aftertimeInMs-beforetimeinMs)


//--------------------------------------Json---------------------------------------------
// so basically what happens is sometime we get the response of json in the form of string for ex:-
// let a ='{name:"Prakhar Singh", age=9}'
//JSON.parse(a)
//and to make the json into string so we used JSON.stringify(arite code

function jsonMethods(jsonString) {
    console.log("Original JSON String:", jsonString);
  
    // Parsing JSON string to JavaScript object
    let parsedObject = JSON.parse(jsonString);
    console.log("After JSON.parse():", parsedObject);
  
    // Stringifying JavaScript object to JSON string
    let jsonStringified = JSON.stringify(parsedObject);
    console.log("After JSON.stringify():", jsonStringified);
  }
  
  // Example Usage for JSON Methods
  const sampleJSONString =
    '{"key": "value", "number": 42, "nested": {"nestedKey": "nestedValue"}}';
  
  jsonMethods(sampleJSONString);


  //--------------------------------------Math------------------------------------------------
  function mathMethods(value) {
    console.log("Original Value:", value);
  
    let rounded = Math.round(value);
    console.log("After round():", rounded);
  
    let ceiling = Math.ceil(value);              //it will increase the value like 2.3=3
    console.log("After ceil():", ceiling);
  
    let flooring = Math.floor(value);            //it will take smallest value like 2.3=2
    console.log("After floor():", flooring);
  
    let randomValue = Math.random();
    console.log("After random():", randomValue);
  
    let maxValue = Math.max(5, 10, 15);
    console.log("After max():", maxValue);
  
    let minValue = Math.min(5, 10, 15);
    console.log("After min():", minValue);
  
    let powerOfTwo = Math.pow(value, 2);
    console.log("After pow():", powerOfTwo);
  
    let squareRoot = Math.sqrt(value);
    console.log("After sqrt():", squareRoot);
  }
  
  // Example Usage for Math Methods
  mathMethods(4.56);
  mathMethods(9);
  mathMethods(25);


  //---------------------------------------Object-------------------------------------------------
  // Object Methods Explanation
function objectMethods(obj) {
    console.log("Original Object:", obj);
  
    let keys = Object.keys(obj);                    //it will give the keys of the object in arrays 
    console.log("After Object.keys():", keys);
  
    let values = Object.values(obj);                //it will give the values of the object in arrays 
    console.log("After Object.values():", values);
  
    let entries = Object.entries(obj);             //it will give in the form of [[keys1, value1], [keys2, value2]]
    console.log("After Object.entries():", entries);
  
    let hasProp = obj.hasOwnProperty("property");      //check if the property exist in object or not
    console.log("After hasOwnProperty():", hasProp);
  
    let newObj = Object.assign({}, obj, { newProperty: "newValue" });     //basuically add properties inside the objects
    console.log("After Object.assign():", newObj);
  
  
  }
  
  // Example Usage for Object Methods
  const sampleObject = {
    key1: "value1",
    key2: "value2",
    key3: "value3",
  };
  
  objectMethods(sampleObject);