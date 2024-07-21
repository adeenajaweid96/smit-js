// 1. Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.

// var firstName = prompt("Enter your first Name");
// var lastName = prompt("Enter your last Name");
// var fullName = firstName + " " + lastName;
// alert(`hello ${fullName} !`);


// 2. Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser

// var favMobile = prompt("Enter your favourite mobile phone model");
// document.write("My favourite phone is: " + favMobile +"<br/>");
// document.write("length of " + favMobile + ":" + favMobile.length);

// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .

// var word = "Pakistani";
// let index = word.indexOf('n');
// document.write("String: " + word + "<br/>" +"Index of 'n': " + index);


// 4. Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.

// var word = "hello World";
// var lastIndex = word.lastIndexOf('l');
// document.write("String: " +word + "<br/>" + "Last Index of 'l': " + lastIndex);

// 5. Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.

// var word = "Pakistani";
// var char = word.charAt(3);
// document.write("String: " +word + "<br/>"  + "Character at Index 3: " + char);

// 6. Repeat Q1 using string concat() method.

// var firstName = prompt("Enter your first Name");
// var lastName = prompt("Enter your last Name");
// var fullName = firstName.concat(" ",lastName);
// alert(`hello ${fullName} !`);


// 7. Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.

// var city = "Hyderabad";
// var newCity = city.replace("Hyder","Islam");
// document.write("City: " +city +"<br/>" + "After replacement: " + newCity );


// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var newMessage = message.replace(/and/g,"&");
// document.write(message);
// document.write(newMessage);


// 9. Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.

// var str = "472";
// var num = parseInt(str);
// document.write("Value: " + str +"<br/>" + "Type: " + typeof(str)+"<br/>" );
// document.write("Value: " + num + "<br/>" + "Type: " + typeof(num));


// 10. Write a program that takes user input. Convert and
// show the input in capital letters.

// var user = prompt("Enter your favourite fruit");
// var upperCase = user.toUpperCase();
// document.write("User Input: " + user + "<br/>");
// document.write("Upper Case: " + upperCase + "<br/>");


// 11. Write a program that takes user input. Convert and
// show the input in title case.

// var user = prompt("Enter a programming language");
// var titleCase = user.charAt(0).toUpperCase()+ user.slice(1);
// document.write("User Input: " + user +"<br/>");
// document.write("Title case: " + titleCase );


// 12. Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.

// var num = 35.36;
// var str = num.toString();
// var newStr = str.replace(".","");
// document.write("Number: " +num + "<br/>" + "Result : " + newStr);


// 13. Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .



// var user = prompt("Enter your name");
// var symbol = "@,.!";

// var check = false;
// for(var i = 0; i < symbol.length; i++){
//     if(user.indexOf(symbol[i] > -1)){
//         check = true;

//     }
// }
// if(check == true){
//     alert("Please enter a valid username");
// }
// else{
//     alert("Hello " + user);
// }



// 14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability. Example:







// 15. Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.










// 16. Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.

// var university = "University of Karachi";
// var arr = university.split(" ");
// for(var i = 0; i < arr.length ; i++ ){
//     for (var j = 0; j < arr[i].length; j++) {

//     document.write(arr[i][j] + "<br/>");
//     }
// }

// 17. Write a program to display the last character of a user
// input.

// var text = "Fiance";
// var lastChar = text.charAt(text.length -1);
// document.write(`User input: ${text} <br/>`);
// document.write(`Last character of user input: ${lastChar}`);


// 18. You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.


// let line = "The quick brown fox jumps over the lazy dog";
// let count = 0;
// let lower = line.toLowerCase();
// let split = lower.split(/\s/);

// for(let i=0; i <= split.length ; i++){
//     if(split[i] == 'the'){
//         count ++;
//     }
// }

// document.write(`Text: ${line} <br/>`);
// document.write(`The word 'the' occur ${count} times in the string`);
