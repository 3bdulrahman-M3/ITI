// var Person = {
//   name: "abdelrhman",
//   greet: function () {
//     console.log("Hello, my name is " + this.name);
//   },
// };

// var student = Object.create(Person);
// student.name = "Ali";
// student.grade = "A";

// student.greet();
// console.log("Grade:", student.grade);

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// var Animal = {
//   speak: function () {
//     console.log("This animal makes a sound.");
//   }
// };

// var dog = Object.create(Animal);

// dog.speak = function () {
//     console.log("The dog is animal");
// };

// dog.speak(); 
// Animal.speak(); 

// dog.__proto__.speak.call(dog);

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


// function Car(brand, year) {
//   this.brand = brand;
//   this.year = year;
// }

// Car.prototype.getAge = function () {
//   var currentYear = new Date().getFullYear();
//   return currentYear - this.year;
// };


// var myCar = new Car("Tyota", 2020);
// console.log(`My car is a ${myCar.brand} and it is ${myCar.getAge()} years old.`); 

 //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// function Gadget(name) {
//   this.name = name;
// }
// Gadget.prototype.use = function () {
//   console.log(this.name + " is now in use.");
// };

// var phone = new Gadget("Smartphone");

// console.log(phone instanceof Gadget);
// phone.use(); 
// console.log(Object.getPrototypeOf(phone)); 


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// var shape = {
//   type: "generic",
//   describe: function () {
//     console.log("This is a " + this.type + " shape.");
//   }
// };

// var circle = Object.create(shape);
// circle.type = "circle";
// circle.describe = function () {
//   console.log("This is a circle.");
// };

// shape.describe(); 
// circle.describe();