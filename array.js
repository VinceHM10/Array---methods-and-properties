// Composite data structure, which allow u to store several pieces of data (elements) in 1 place: data collection. After each element u need a comma.
// x = new Array () or x = []
arr = ["V", 45, ["International delegate", "Security analyst", "Beat-maker"], 128.7, true];
arr[6] = 4.9;
console.log(arr[2][2]);
console.log(arr[6]); // u can leave empty spaces in d array = A[5]
console.log(typeof arr); // in JS, everything except primitives is an object!!!
console.log(arr.length); // length prototype property
console.log(arr instanceof Array) // instanceof operator is a 2-argument operator: d tested var (or literal) + d object class to be specified
 
// Prototype methods ()
// indexOf ()
console.log(arr.indexOf("V"));
console.log(arr[2].indexOf("International delegate"));
console.log(arr[2].indexOf("Proofreader")); // -1 if d element not found

// lastIndexOf () starts d search from d right side (d end of d array).
console.log(arr.lastIndexOf(128.7));
console.log(arr.lastIndexOf(2));

// push () adds an element at d end of d array.
arr.push("Mexico!! Tequila!!!");
console.log(arr);

// pop () removes d last element of d array.
arr.pop();
console.log(arr);

// shift () removes d 1st element [0] of d array.
arr.shift();
console.log(arr);

// unshift () adds an element to d beginning of d array [0].
arr.unshift("Vinz");
console.log(arr);

/* slice () allows u to  create a NEW array from selected elements of d original array.
Calling d method does not affect d original array. D method takes either 1 or 2 integer values as arguments.
D basic combinations are:
- 1 argument larger than 0 - all elements from d index given as an argument 2 d end of d array are copied;
- 2 arguments larger than 0 - d 1st argument determines d index from which we start copying. d 2nd argument is d index of d end of d copied fragment of d array (it won't be copied!!!);
- 2 arguments, 1st positive, 2nd negative - all elements from d specified index 2 d end of d array are copied, except for d specified number of d last elements (e.g. argument -2 means that we do not copy d last 2 elements);
- 1 negative argument - d specified number of d last elements are copied 2 d end of d array (e.g. -2 means that u copy d last 2 elements).*/
let names = ["Vinz", "Emma", "Laura", "Samuel"];
let n1 = names.slice(2);
console.log(n1); // -> ["Laura",  "Samuel"]
let n2 = names.slice(1, 3);
console.log(n2); // -> ["Emma",  "Laura"]
let n3 = names.slice(0, -1);
console.log(n3); // -> ["Vinz",  "Emma",  "Laura"]
let n4 = names.slice(-1);
console.log(n4); // -> ["Samuel"]
console.log(names);

/* splice () does modify d original array!
2 ways to use it:
- 1: it allows us to remove selected elements from d array.
D 1st argument is d index of d 1st element to be removed and d 2nd argument is d number of d elements to be removed.
*/
let animals1 = ["dog", "shark", "koala", "leopard", "turtle", "dolphin"];
let removeAnimals1 = animals1.splice(2, 3);
console.log(animals1);
console.log(removeAnimals1);
/*
 -2: it allows to insert new elements into d array. This time both arguments need to be provided.
If we don't want to delete anything, then we give 0 as d 2nd argument.
For any subsequent arguments, we give d values to be located in a specific place of d array.
*/
animals1.splice(2, 0, "fox", "lion");
console.log(animals1);

// split () converts a string into an array of substrings. It takes 1 argument - a separator (a character or a string) that will be used to split d string into substrings. If we don't provide any argument, then d whole string will be treated as 1 element of d array.
let ipAddresses = "127.0.0.1, 127.0.0.1, 127.0.0.2";
let ipBits = ipAddresses.split(",");
console.log(ipBits);

// concat () creates a new array by attaching elements from d array given as an argument 2 d original array elements. It changes neither d original array nor d array specified as an argument.
let name = ["Olivia", "Emma", "Laura", "Samuel"];
let otherNames = ["Vinz", "Jane"];
let allNames = name.concat(otherNames);
console.log(name);
console.log(otherNames);
console.log(allNames);
otherNames[6] = "Rachel";
console.log(otherNames);

// delete command (not the Array constructor method!)
delete otherNames[0];
console.log(otherNames);

// forEach () is d most used method. Only 1 condition => at least 1 parameter (which will be treated as a visited element of d array)!
let array1 = ["fox", 1, 2, 3.5, -27, "wolf"];
// for (let index = 0; index < array1.length; index++) {
//     console.log(`${index}: ${array1[index]}`)
// };
// function display(item, index, array) {
//     console.log(`${index}: ${item}`)
// }
// array1.forEach(display);

// array1.forEach(function (item, index) {
//     console.log(`${index}: ${item}`)
// }
// )
// array1.forEach((item, index) => {
//     console.log(`${index}: ${item}`)
// }
// )
array1.forEach((item, index) => console.log(`${index}: ${item}`));

// some () at least 1 element of d array meets d condition.
// anyNumber = array1.some((item) => {
//     return (typeof item === "number")
// })
// only 1 instruction in d function block, therefore removing d brackets that enclose it.
// In arrow functions, where not using d curly brackets to mark d function block, d return keyword also disappears!!!
// As there is only 1 parameter item passed to d function, also omitting d parenthesis surrounding d parameter.
anyNumber = array1.some((item) => typeof item === "number");
console.log(anyNumber);

// every () all d elements in d array meet d condition.
// Both some () and every () take as an argument a function that will allow d testing of a single element.
anyNumber1 = array1.every((item) => typeof item === "number");
console.log(anyNumber1);

// filter () copies all elements that have passed d test and returns them as a new array. It doesn't modify d original 1.
numbers = array1.filter((item) => typeof item === "number");
console.log(array1.length);
console.log(numbers);

// map () a new array created by performing d action invented on each element of d original array.
// D function passed to d () takes d item, index and array arguments!!!
numbers = array1
  .filter((item) => typeof item === "number")
  .map((item) => item * item); // method chaining
console.log(numbers);

// sort () d way we prefer
numbers = [30, 10, 200, 4];
numbers.sort(); // [4, 10,  30,200] - elements are treated as strings, not numbers.
// Solution
function numberCompare(a, b) {
  return a - b;
}
sortedNumbers = numbers.sort(numberCompare);
console.log(sortedNumbers);
// // Solution 2
// sortedNumbers1 = numbers.sort((first, second) => {
//     if (first < second) {
//         return -1
//     } else {
//         return 1
//     }
// });
// sortedNumbers1 = numbers.sort((first, second) => first - second);
// console.log(sortedNumbers1);

// reduce () goes through all d elements of d array starting from d left, and for each element it calls d function we have written.
// Diff from forEach () in which parameters it takes and what our function returns (called a reducing function).
sum = numbers.reduce((accumulator, item) => accumulator + item); // skips d 1st element (30)
console.log(sum);
// reduce () accept another argument: d initial value (it doesn't skip d 1st element because we declare it).
sum2 = numbers.reduce((accumulator, item) => accumulator + item, 1000); // d initial value is a parameter of d reduce (), not d reduction function!!!
console.log(sum2);
// Other example: converting d array into an object with d keys that are elements of d array and d values that are indexes of those elements.
indexes = numbers.reduce((accumulator, item, index) => {
  accumulator[item] = index; 
  return accumulator;
}, {}); // {} empty object is given as an initial value to reduce
console.log(indexes);

// reverse () modifies d original array.
console.log(sortedNumbers[0]);
sortedNumbers.reverse();
console.log(sortedNumbers);

// includes ()
let otherNumbers = [1, 2, 3, 10, 100, 2];
console.log(otherNumbers.includes(5)); // false
console.log(otherNumbers.includes(10));

// find () and findIndex () both takes a testing function as a parameter (like some () and every ()).
let animals = ["dog", "shark", "koala", "leopard", "turtle", "dolphin"];
console.log(animals.find((item) => item.length > 5));
console.log(animals.find((item) => item.includes("og")));
console.log(animals.find((item) => item.includes("fish"))); // undefined
console.log(animals.findIndex((item) => item.length > 5)); // 3
console.log(animals.findIndex((item) => item.includes("og"))); // 0
console.log(animals.findIndex((item) => item.includes("fish"))); // -1

// Function Parameters - REST operator allows u to create a function that takes a variable number of arguments. Convenient solution when it is difficult to define d exact number of parameters.
// REST operator ... needs to be d last variable in d list, and only 1 REST parameter may appear in a function declaration.
const add = (function () {
  // return function add(x, y, z) {
  // const args = [x, y, z]; // []
  // return args.reduce((a, b) => a + b, 0);
  return function add(...args) {
    // more than 3 arguments. Array now is called args.
    return args.reduce((a, b) => a + b, 0);
  };
})();
console.log(add(1, 2, 3, 4, 5));

// Function Parameters - SPREAD operator ... is reversal of d REST operator.
// Expanding an already existing array or it spreads out an array into its individual elements. You can use it in an argument to a function or in array literal.
const arr1 = ["Jan", "Feb", "Mar", "Apr", "May"];
let arr2;
(function () {
  // Immediately Invoked Function Expression - IIFE!!!
  // arr2 = arr1;
  arr2 = [...arr1];
  arr1[0] = "Potato";
})();
console.log(arr1);
console.log(arr2);

// IIFE is a design pattern that is useful for when creating a function to be called just once and right after defining it.
// Example:
(function (mes) {
  // anonymous function - d name is not needed as I won't refer to it again!
  console.log(mes);
})("test"); // (function(x){function body})(x)!!!!!
/* Why not using a simpler solution, as d following 1:
let mes = "test";
console.log(mes);
To prevent global variables from "polluting" d global variables namespace. In larger apps d number of such variables as mes/msg can be very big.
Besides, if I start to use ready-made solutions (e.g.: libraries) it may turn out that some names will repeat.
IIFE allows me to close a selected piece of code, potentially d whole app, and use local variables instead of global ones.
Sometimes used to encapsulate d app's entire code! Technique to separate logical modules that can be treated independently and possibly configured by passing specific call arguments.
*/
(function () {
  let a = 100;
  let b = 200;
  let result;
  let sum = function (x, y) {
    return x + y;
  };
  result = sum(a, b);
  console.log(result);
})();
// console.log(result); => undefined ReferenceError because it is a local variable!!!

// In computer science a cue is an abstract data structure where items are kept in order. Next items can be added to d back of d cue, and old items are taken off from d front of d cue.
function nextInLine(arr, item) {
  arr.push(item);
  return arr.shift();
};
var testArr = [1, 2, 3, 4, 5];
console.time("testArr"); // time () and timeEnd () are used to measure d time taken by a block of code to execute. They take 1 argument - a label (a string) that will be used to identify d block of code.
console.log("Before: " + JSON.stringify(testArr)); // .stringify 2 change an array into a string, that can be easily printed out 2 d screen
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));
console.timeEnd("testArr"); // d label must be d same as d one used in time ()!!!

// APP able to draw 1 element from a given array.
// let drawElement = function (array, index) {
//     let val = undefined;
//     if (index > 0 && index < array.length) {
//         val = array[index];
//     }
//     return val;
// };
let drawElement = function (array, index) {
  return (index > 0 < index < array.length) ? array[index] : undefined;
  // return array[index]; // not necessary to check whether d index is within d range of d array elements
};
let array = [1, 10, 100, 1000];
console.log(drawElement(array, 3));

// APP able to draw 1 random element.
let drawRandomElement = () => {
  // function(array) {}
  return array[Math.floor(Math.random() * array.length)];
};
console.log(drawRandomElement(array));

// created a function not permanently linked to d array. Same functionality in d form of a method, extending d array object.
// Added a new method (drawRandomElement) to d prototype field of d array constructor. No arguments because d array on which we work is stored in the object.
Array.prototype.drawRandomElement = function () {
  return this[Math.floor(Math.random() * this.length)];
};
console.log(array.drawRandomElement());
