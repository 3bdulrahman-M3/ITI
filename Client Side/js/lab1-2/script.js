// lap1
// var firstName = "Abdelrhman";
// var lastName = "Adel";
// var fullName = firstName + " " + lastName;
// console.log(fullName);
// //-----------------------------------------------------------------------------------------
// var name = "Abdelrhman";
// var age = 20;
// var isStudent = true;
// var address = 'portsaid';

// console.log("Name: " + name);
// console.log("Age: " + age);
// console.log("Is Student: " + isStudent);
// console.log("Address: " + address);
// //-----------------------------------------------------------------------------------------

// var x = 5;
// var y = 10;
// console.log("Before swap: x = " + x + ", y = " + y);
// var temp = x;
// x = y;
// y = temp;
// console.log("After swap: x = " + x + ", y = " + y);
//-----------------------------------------------------------------------------------------







// lap2

// var1- Create a program that asks the user to enter their name using prompt().
// Check if the entered name exists in a predefined guest list array. If
// the name exists, greet the user. Otherwise, alert them that they are not
// on the list.


// var name = prompt("Enter your name:");

// var names = ['abdelrhman', 'adel', 'ahmed', 'mohamed', 'ali','lama'];

// if (names.includes(name)) {
//     console.log("Greate user " + name);
// }
// else {
//     alert("You are not welcome");
// }

//-----------------------------------------------------------------------------------------

// 2- Create a program that prompts the user to enter a sentence. Then,
// remove any word that contains the letter "x" (case-insensitive) and
// display the cleaned-up sentence.

// var sentence = prompt("Enter a sentence:");
// var words = sentence.split(" ");
// console.log(words);
// var wordsAfter = [];

// for (var i = 0; i < words.length; i++) {
//   var word = words[i];
//   console.log(word);
//   if (!word.toLowerCase().includes("x")) {
//     wordsAfter.push(word);
//   }
// }

// var cleanedSentence = wordsAfter.join(" ");
// alert("After clean: " + cleanedSentence);
//......................................................



// 3- Create a loop that keeps asking the user to enter product names
// (one by one). Store them in an array. If the user types "done", stop
// the loop. Then show a summary of all items added to the cart and push them in an array.

// var cart = [];
// var product;

// while (true) {
//   product = prompt("Enter a product name (or type 'done' to end the adding):");

//   if (product.toLowerCase() === "done") {
//     break;
//   }

//   cart.push(product);
// }

// console.log("Products added to your cart: " + cart.join(", "));

//.........................................................

// 4- Prompt the user to enter a password. Check if it meets the following conditions:

//     a- At least 8 characters

//     b- Contains letters

//     c- Doesn’t contain any spaces


// var password = prompt("Enter password:");
// var isValid = false;
// while (!isValid) {
//   isValid = true;

//   if (password.length < 8) {
//     isValid = false;
//   }

//   for (var i = 0; i < password.length; i++) {
//     var char = password[i];
//     if (char === " ") {
//       isValid = false;
//       break;
//     }
//     if (!isNaN(char)) {
//       isValid = false;
//       break;
//     }
//   }

//   if (!isValid) {
//     password = prompt(
//       "Password should be at least 8 character, wth no spaces or numbers, write again: "
//     );
//   }
// }
// alert("Password is valid");
