//define variables
let apple = "apple";
let uppercaseApple = "APPLE";
let ten = 10;
let twenty = 20;
let fruits = ["apple", "orange", "mango"];

//test for equality and inequality with string

console.log("Is Apple is equal to apple");
console.log(apple == apple);

console.log("\nIs Apple is not equal to apple");
console.log(apple != apple);

//Test using lower case function
console.log("\nIs APPLE is equal to apple after converting to lowercase");
console.log(uppercaseApple.toLowerCase() == apple);

console.log("\nIs APPLE is not equal to apple after converting to lowercase");
console.log(uppercaseApple.toLowerCase() != apple);

//Numerical tests
//equal to
console.log("\nIs ten is equal to twenty");
console.log(ten == 20);

//not equal to
console.log("\nIs ten is not equal to 20");
console.log(ten != 20);

//Greater than
console.log("\nIs ten is greater than 0");
console.log(10 > 0);
 // less than
console.log("\nIs ten is less than 0");
console.log(10 < 0);

//greater than or equal to
console.log("\nIs twenty is greater than or equal to 5");
console.log(twenty >= 5);

//less than or equal to
console.log("\nIs twenty is less than or equal to 5");
console.log(twenty <= 5);

//test using  "and" & "or" operators

// && (and) operator
console.log("\n twenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 10)

console.log("\n twenty is not equal to 10 and twenty is equal to 30");
console.log(twenty != 10 && twenty == 30)

//using || (or)
console.log("\n twenty is not equal to 10 and ten is equal to 30");
console.log(twenty != 10 || ten == 30);

console.log("\n twenty is greater than  30 and twenty is equal to 10");
console.log(twenty > 30 || twenty == 10);

// test weather an item is include in array
console.log("\n Is orange include in my fruits array");
console.log(fruits.includes("orange"));

// not include
console.log("\n Is orange is not include in my fruits array");
console.log(!fruits.includes("orange"));
