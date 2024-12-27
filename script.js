// Task 1

console.log(-5 * 3);
console.log("JavaScript" + 50);
console.log(17 % 5);
console.log(5 % 17);
console.log(5 / 10);
console.log(4 === "4");
console.log(4 != 5);
console.log(7 <= 8);
console.log("Hello" + 5);

let x = 4.5;
console.log(Math.ceil(x) - Math.floor(x));
console.log(Math.pow(x, 2));

// Task 2
function ramziFunction() {
  let number = prompt("Enter a number:");
  alert("You entered: " + number);
}

// Task 3
function numberFunction() {
  let number1 = Number(prompt("Enter the first number:"));
  let number2 = Number(prompt("Enter the second number:"));
  let sum = number1 + number2;
  document.getElementById("result").innerHTML =
    "Here is the sum of the numbers you entered " + sum;
}

// Task 4
function numFunction() {
  let num1 = Number(prompt("Enter the first number:"));
  let num2 = Number(prompt("Enter the second number:"));
  let answer = num1 * num2;
  document.getElementById("answer").innerHTML =
    "Here is the sum of the numbers you entered " + answer;
}
// Task 5
function devideFunction() {
  let numb1 = Number(prompt("Enter the first number:"));
  let numb2 = Number(prompt("Enter the second number:"));
  let outcome = numb1 / numb2;
  document.getElementById("outcome").innerHTML =
    "Here is the Division of the numbers you entered " + outcome;
}
// Task 6
function addingFunction() {
  let Data1 = Number(prompt("Enter the first number:"));
  let Data2 = Number(prompt("Enter the second number:"));
  let total = Data1 + Data2;
  alert("The total of the numbers is: " + total);
}
