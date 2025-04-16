var numbers = [10, 20, 30, 40, 50];

console.log("Original Array:", numbers);
console.log("First Element:", numbers[0]);
console.log("Last Element:", numbers[numbers.length - 1]);

//................................................................

numbers.push(60);
numbers.shift();

console.log("Modified Array:", numbers);
//................................................................

function printArray(arr) {
  console.log("Printing each element:");
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
printArray(numbers);
//......................................................

function printMax(arr) {
  return Math.max(...arr);
}

console.log("Max Number:", printMax(numbers));

//.......................................................
function sum(arr) {
  var total = 0;
  for (var i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}
console.log("Sum of Numbers:", sum(numbers));
//.......................................................
function evenNumbers(arr) {
  var even = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      even.push(arr[i]);
    }
  }
  return even;
}
console.log("Even Numbers:", evenNumbers([1, 2, 3, 4, 5, 6]));
//.....................
function Greterthan25(arr) {
  var greater = [];
  var N = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 25) {
      N++;
    }
  }
  return N;
}
console.log("Numbers greater than 25:", Greterthan25(numbers));

//.......................................................
function cleareDublicate(arr) {
  var unique = [];
  for (var i = 0; i < arr.length; i++) {
    if (unique.indexOf(arr[i]) === -1) {
      unique.push(arr[i]);
    }
  }
  return unique;
}
console.log("Array without duplicates:", cleareDublicate([1, 2, 2, 3, 3, 4]));
//.....................................................
pepole = [
  {
    name: "Abdo",
    age: 25,
  },
  {
    name: "ahmed",
    age: 20,
  },
  {
    name: "ali",
    age: 35,
  },
  {
    name: "ismail",
    age: 35,
  },
  {
    name: "ramez",
    age: 35,
  },
];
function sameage(arr, age) {    
  var same = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].age == age) {
      same.push(arr[i]);
    }
  }
  return same;
}
console.log("People with same age:", sameage(pepole, 20));
