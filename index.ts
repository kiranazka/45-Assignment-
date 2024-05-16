// import chalk from "chalk"
let Apple = "apple";
// test for equality and inequality with strings
console.log (" \nIs apple is equal to Apple?\n")
console.log(Apple == "apple");
console.log("\nIs apple is not equal to Apple?\n");
console.log(Apple != "apple");
// Test using the Lower case Function True && Fasle
let upperCaseApple = "APPLE";
console.log("\n Is apple is equal to lowerCase Apple?\n");
console.log(upperCaseApple.toLowerCase() == Apple);
console.log("\n Is apple is not equal to lowerCase Apple?\n");
console.log(upperCaseApple.toLowerCase() != Apple);
// Test  Numerical Number
let num1 = 5;
let num2 = 78 ;
// num1 is num2 is equal 
console.log("\n Is num is equal to num2?\n");
console.log(num1 == num2);
// num1 is num2 is not equal 
console.log("\n Is num is not equal to num2?\n");
console.log(num1 != num2);
// num1 is num2 is greater then
console.log("\n Is num is greater then to num2?\n");
console.log(num1 > num2);
// using && or || operator
console.log("\n Is five is not equal To seventyeight  and five is greater then to seventyeight?\n");
console.log(num1 !=  num2 && 5 > 78);
console.log("\n Is five is  not equal To seventyeight  and five is less then to seventyeight?\n");
console.log(num1 !=  num2 && 5 < 78);
// num1 is num2 is greater then && equal to
console.log("\n Is num is greater then to equal to num2?\n");
console.log(num1 >= num2);
// num1 is num2 is less then && equal to
console.log("\n Is num is less then to equal to num2?\n");
console.log(num1 <= num2);
// Using || (OR)
console.log("\n 20 is greater then 50 OR 20 is equal to 20");
console.log(20 > 50 || 20 == 20);
console.log("\n 20 is greater then 50 OR 20 is not equal to 20");
console.log(20 > 50 || 20 != 20);
// create Array
let fruit = ["apple", "banana", "orange","peach"];
// Test wether inculed item in Array
console.log("\n Is orange include in my Array?\n");
console.log(fruit.includes("orange"));
console.log("\n Is PineApple include in my Array?\n");
console.log(!fruit.includes("PineApple"));
