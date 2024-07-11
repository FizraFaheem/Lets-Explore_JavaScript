//Question no 1
let num = 100;

if (num % 2 === 0) {
    console.log("Good");
} else {
    console.log("Bad");
}

//Question no 2
let name = prompt("Enter your name.....:");
let age = prompt("Enter your age....:");

let message = "";

if (age >= 18) {
    message = `Hello, ${name}! Welcome! You are old enough to proceed.`;
} else {
    message = `Hello, ${name}! Sorry! You are not old enough to proceed.`;
}
alert(message);

//Question no 3:

let inputString = prompt("Enter a string:");

if (inputString.charAt(0) === 'A' || inputString.charAt(0) === 'a') {
    if (inputString.length > 5) {
        alert("This is a golden string!");
    } else {
        alert("This string is not long enough to be golden.");
    }
} else {
    alert("This string doesn't start with 'A' or 'a'.");
}

//Question no 4
let quarter = parseInt(prompt("Enter a quarter number (1, 2, 3, or 4):"));

// Switch statement to print months based on quarter number
switch (quarter) {
    case 1:
        console.log("Months in Quarter 1: January, February, March");
        break;
    case 2:
        console.log("Months in Quarter 2: April, May, June");
        break;
    case 3:
        console.log("Months in Quarter 3: July, August, September");
        break;
    case 4:
        console.log("Months in Quarter 4: October, November, December");
        break;
    default:
        console.log("Invalid quarter number. Please enter a number between 1 and 4.");
        break;
}

//Question no 5
let num1 = (prompt("Enter the first number:"));
let num2 = (prompt("Enter the second number:"));
let num3 = (prompt("Enter the third number:"));

// Find the largest number using Math.max() function
let largest = Math.max(num1, num2, num3);

alert(`The largest number is: ${largest}`);

//Question no 6
let numb1 = prompt("Enter the first number:");
let numb2 = prompt("Enter the second number:");

let lastDigit1 = numb1 % 10;
let lastDigit2 = numb2 % 10;

if (lastDigit1 === lastDigit2) {
    alert("The numbers have the same last digit.");
} else {
    alert("The numbers do not have the same last digit.");

}
