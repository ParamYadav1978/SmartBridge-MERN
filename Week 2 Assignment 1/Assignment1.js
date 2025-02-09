// 1: Declare a variable age and check if it's adult
let age = 25;
let isAdult = age >= 18 ? true : false;
console.log("Is Adult:", isAdult);

// 2: Perform operations with x and y
let x = 10;
let y = 5;
let addition = x + y;
let multiplication = x * y;
let modulus = x % y;

console.log("Addition:", addition);
console.log("Multiplication:", multiplication);
console.log("Modulus:", modulus);

// 3: Check if a number is even or odd
let n = 7; // You can change this value
if (n % 2 === 0) {
    console.log("Number is Even");
} else {
    console.log("Number is Odd");
}

// 4: Store numbers from 1 to 5 in an array
let numbers = [];
for (let i = 1; i <= 5; i++) {
    numbers.push(i);
}
console.log("Numbers array:", numbers);

// 5: Function to return the square of a number
function square(num) {
    return num * num;
}
let result = square(4);
console.log("Square of 4:", result);
