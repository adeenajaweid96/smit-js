// 1. Declare and initialize an empty multidimensional array.
// (Array of arrays)

// var arr = [];
// console.log(arr);

// 2. Declare and initialize a multidimensional array
// representing the following matrix:

// var arr_1 = [[0,1,2,3],[1,0,1,2],[2,1,0,1]];
// document.write(arr_1 + "<br/>");


// 3. Write a program to print numeric counting from 1 to 10.
// for(var i=1;i<=10;i++){
//     document.write(i+"<br/>");
// }

// 4. Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.

// var user = +prompt("Enter a nuber to show its mutiplication table");
// var length = +prompt("Enter the length of the table");

// for(var i=1;i<=length;i++){
//     document.write(user+" * " + i + "=" + i*user + " <br/>");
// }



// 5. Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]

// var fruits = ["apple", "banana", "mango", "orange","strawberry"];
// var result = "";
// for(var i=0;i<fruits.length;i++){
    
//     document.write(fruits[i]+"<br/>");
//     document.write("Element at index " + i + " is " +fruits[i]+"<br/>");

// }

    

// 6. Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k


// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:

// var items = ["cake","pastry","cupcakes","tart","cookie","apple pie"];
// var search = prompt("Welcome to desire bakery What do you want to order sir/ma'am?");
// for(var i=0;i<=items.length;i++){
//     if(items.includes(search)){
//    document.write( search + "is at index " + items[search] + "<br/>" );
//     }

// else{
//     document.write("We are sorry " + search + " is not available in our bakery");
// }
// }


// 8. Write a program to identify the largest number in the
// given array.
// A = [24, 53, 78, 91, 12].


// var num = [54,33,21,54,76,11,45,13];
// var largest = num[0];
// for(var i=1;i<num.length;i++){
//     if(num[i]>largest){
//         largest = num[i];
//     }
// }
// document.write("Array items: " + num + "<br/>")
// document.write("The largest number is " + largest);



// 9. Write a program to identify the smallest number in the
// given array.
// A = [24, 53, 78, 91, 12]

// var num = [54,33,21,54,76,11,45,13];
// var smallest = num[0];
// for(var i=1;i<num.length;i++){
//     if(num[i]<smallest){
//         smallest = num[i];
//     }
// }
// document.write("Array items: " + num + "<br/>")
// document.write("The smallest number is " + smallest);





// 10. Write a program to print multiples of 5 ranging 1 to
// 100.

// for(var i = 1;i <=100;i++){
//     if(i % 5 == 0){
//     document.write(i+",");
//     }
// }