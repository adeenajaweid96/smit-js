// 1. Write a function that displays current date & time in your
// browser.

/*function myFunction(){
    var date = new Date();
   document.write(date);

}
myFunction();*/

// 2. Write a function that takes first & last name and then it
// greets the user using his full name.


/*function greet(){
    var firstName = prompt("Enter your first name");
    var lastName = prompt("Enter your last name");
    var fullName = firstName + " " + lastName;
    alert("Hello, " + fullName);
}
greet();*/

// 3. Write a function that adds two numbers (input by user)
// and returns the sum of two numbers.

/*function add(){
    var num1 = +prompt("Enter a number");
    var num2 = +prompt("Enter a number");
    var sum = num1 + num2;
    alert("The sum of " +num1 +" & " + num2 + " is " + sum);
}
add();*/

// 4. Calculator:
// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.

/*function calculator(num1,operation,num2){
if(operation === '+'){
    var result = num1 +num2;
alert(result);
}

else if(operation === '-'){
    var result = num1 -num2;
alert(result);
}

 else if(operation === '*'){
    var result = num1 *num2;
alert(result);
}

else if(operation === '/'){
    var result = num1 /num2;
alert(result);
}

else{
    alert('invalid operator');
}
}
var number1 = +prompt('Enter first number');
var operator = prompt('Enter an operator');
var number2 = +prompt('Enter  second number');
calculator(number1,operator,number2);*/


// 5. Write a function that squares its argument.

/*function square(num){
    var result = num * num;
    alert(result);

}
var number = +prompt("Enter a number");
square(number);*/

// 6. Write a function that computes factorial of a number.

/*function factorial(){
    var number = +prompt('Enter number');
    var factor = 1;
     if(number === 0 || number === 1){
    }
    else{
        // return n * factorial(n-1);
        for(var i =0;i >= 1;i++){
            factor= factor * i;
        }
    }
document.write(factor);
}
factorial();*/


// 7. Write a function that take start and end number as inputs
// & display counting in your browser.

/*function counting(start,end){
    for(var i= start;i <=end;i++){
        document.write(i + "<br/>");
    }
}
var start = +prompt("Enter starting number");
var end = +prompt("Enter ending number");


counting(start,end);*/



// 8. Write a nested function that computes hypotenuse of a
// right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2
// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()

/*function calculateHypotenuse(){
    function calculateSquare(x){
       return  x*x;
    }
    var base = +prompt("Enter the base of a right angle triangle");
    var perpendicular = +prompt("Enter the perpendicular of a right angle triangle");

    var hypotenuse = Math.sqrt(calculateSquare(base)+calculateSquare(perpendicular));

    if (isNaN(base) || isNaN(perpendicular)) {
        alert("Please enter valid numeric values for both the base and perpendicular.");
        return; 
      }
      else{
    alert("The hypotenuse of right angle triange with base "+ base+"and perpendicular " +perpendicular + " is = "+ hypotenuse);
      }

}

calculateHypotenuse();*/


// 9. Write a function that calculates the area of a rectangle.
// A = width * height
// Pass width and height in following manner:

// i. Arguments as value
// ii. Arguments as variables

/*function calculates(width,height){
var area = width*height;
return area;
}

var width =+prompt("Enter width");
var height = +prompt("Enter height");
var result = calculates(width,height);
alert("Area of rectangle is = "+ result);*/

// 10. Write a JavaScript function that checks whether a passed
// string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as
// forward, e.g., madam.

/*function palindrome(string){  
    var check = '';
    for(var i = string.length -1 ; i >= 0 ;i--){
        check+= string[i]
    }
if(string === check){
    alert(string + " is a palindrome word");
}
else{
    alert(string + " is not a palindrome word");
}

}
var str = prompt("Enter a word");
palindrome(str);*/

// 11. Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'

/*function firstLetter(str){
var arr = str.split(' ');
var newArray = [];
for(var i=0; i < arr.length;i++){
    newArray.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1))
}
return newArray.join(' ');
}
var str = prompt("Enter a word");
alert(firstLetter(str));*/



// 12. Write a JavaScript function that accepts a string as a
// parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'

/*function long(str){
    var arr = str.split(' ');
    var longest = arr[0];
    for(var i=1 ;i < arr.length;i++){
        if(arr[i].length > longest.length){
            longest = arr[i];
        }
    }
    return longest;
}
var str = prompt("Enter a sentence");
alert(long(str));*/


// 13. Write a JavaScript function that accepts two arguments, a
// string and a letter and the function will count the number of
// occurrences of the specified letter within the string.
// Sample arguments : 'JSResourceS.com', 'o'

/*function counter(str,letter){
    var count= 0;
    for(var i=0; i < str.length;i++){
        if(str[i]== letter){
            count+= 1;
        }
        }
        return count;
    }
    var str = prompt("Enter a word");
    var letter = prompt("Enter a letter");
    alert(counter(str,letter));*/

// 14. The Geometrizer
// Create 2 functions that calculate properties of a circle, using
// the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area
// is NN".
// Circumference of circle = 2πr
// Area of circle = πr2

/*function calcCircumference(radius){
    var circumference = 2 * Math.PI * radius;
    return circumference;
}
function calcArea(radius){
    var area = Math.PI * (radius *radius);
    return area;
}
var radius = +prompt("Enter radius");
var circumference= calcCircumference(radius);
var area = calcArea(radius);
alert("The circumference is " + circumference );
alert("The area is " + area);*/



























