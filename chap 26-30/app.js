// 1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number


// var num = +prompt("Enter a number");
// var round = Math.round(num);
// var floor = Math.floor(num);
// var ceil = Math.ceil(num);
// document.write("Number: " + num + "<br/>");
// document.write("Round Off value: " + round + "<br/>");
// document.write("Floor Value: " + floor + "<br/>");
// document.write("Ceil Value: " + ceil + "<br/>");


// 2. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number


 /*var num = +prompt("Enter a number");
var round = Math.round(num);
var floor = Math.floor(num);
var ceil = Math.ceil(num);
document.write("Number: " + num + "<br/>");
document.write("Round Off value: " + round + "<br/>");
document.write("Floor Value: " + floor + "<br/>");
document.write("Ceil Value: " + ceil + "<br/>");*/


// 3. Write a program that displays the absolute value of a
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5


/*var user = +prompt("Enter  number: ");
var abs = Math.abs(user);
document.write("The absolute value of " + user + " is " + abs);*/


// 4. Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.:

// var number = Math.random()*6;
// var floor = Math.floor(number);
// document.write("Random dice value: " + floor);


// 5. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser

/*var coin = Math.random()*3;
var floor = Math.floor(coin);
if(coin <2){
    document.write(floor +"<br/>" +"Random coin value : Tail" );

}
else{
    document.write(floor +"<br/>" + "Random coin value : Head" );

}*/

// 6. Write a program that shows a random number between 1
// and 100 in your browser.

/*var number = Math.random()*100;
var floor = Math.floor(number);
document.write("random number between 1 and 100: " + floor);*/


// 7. Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms

/*var userInput = prompt("Enter your weight in kilograms:");
var weight = parseFloat(userInput);
document.write("The weight of user is " + weight + " kilograms");*/


// 8. Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user.

var secretNum = Math.ceil(Math.random()*10);
document.write(secretNum);
var userInput = prompt("Enter a number between 1 and 10:");
if(userInput === secretNum){
    alert("Congratulations! You enter the correct number");
}
else{
    alert("Try Again");
}
