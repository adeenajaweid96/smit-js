// 1. Write a program that displays current date and time in
// your browser.

/*var currentDate = new Date();
document.write(currentDate);*/

// 2. Write a program that alerts the current month in words.
// For example December.

/*var months = ['january',"February","March","April","May","June","July",
    "August","September","October","November","December"];
var date = new Date();
var currMonth = date.getMonth();
document.write("Current Month: " + months[currMonth]);*/

// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.

/*var date = new Date();
var currDay = date.getDay();
var dayName = ["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday","Saturday"];
var index =  dayName[currDay];
var firstLetters = index.slice(0,3);
document.write("Today is " +firstLetters);*/


// 4. Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.

/*var date = new Date();
var currDay = date.getDay();
var dayName = ["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday","Saturday"];
if(currDay == 0 || currDay == 6){
    document.write(" It's Fun Day");
}
else{
    document.write("It's not fun day ");
}*/


// 5. Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.

/*var date = new Date();
var currDay = date.getDay();
if(currDay < 16){
    document.write("First fifteen days of the month");
}
else{
    document.write("Last days of the month");
}*/


// 6. Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.

/*var date = new Date();
var milliSecond = date.getTime();
document.write("Current date: " + date + "<br/>");
document.write("Elapsed millisecond since January 1, 1970: " + milliSecond + "<br/>");
document.write("Elapsed minutes since January 1, 1970: " + (milliSecond/1000*60));*/


// 7. Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.

/*var date = new Date();
var hour = date.getHours();
if(hour < 12){
    document.write("Its AM");
}


else{
    document.write("Its PM")
}*/


// 8. Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.

/*var date = new Date();
var laterDate = new Date(2020, 11, 31);
document.write("Later date: " + laterDate);*/


// 9. Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015


/*var date  = new Date();
var time = new Date('2015-06-18');
var diff = date - time;
var diffDays = Math.floor(diff/(1000*60*60*24));
document.write(`${diffDays} days have passed since 1st Ramadan, 2015`);*/


// 10. Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015.

    /*var date = new Date();
    var getTime = date.getTime();
    var beginYear = new Date('2015-01-1');
    var year = beginYear.getTime();
    var diff = getTime - year;
    var diffSec = Math.floor(diff/(1000));
    document.write("On referene date " + date + "<br/>" + diffSec + "seconds have passed since beginning of 2015");*/


//     11. Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.

/*var date = new Date();
var hours = date.getHours();
hours = hours-1;
document.write("current date : " + date + "<br/>")
date.setHours(hours);
document.write("one hour ago, it was " + date);*/

// 12. Write a program that creates a date object and show the
// date in an alert box that is reset to 100 years back?

/*var date = new Date();
var oldDate = date.getFullYear();
oldDate = oldDate - 100;
document.write("current date : " + date + "<br/>")
date.setFullYear(oldDate);
document.write("100 years back, it was " + date);*/


// 13. Write a program to ask the user about his age. Calculate
// and show his birth year in your browser.


/*var user = +prompt("Enter your age");
var date = new Date();
var ageNow = date.getFullYear();
var birthYear = ageNow - user;
document.write("Your age is " + user +"<br/>" + "Your birth year is " + birthYear);*/



// 14. Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,

// Net Amount Payable (within Due Date) = Number of units * Charges per unit
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge

var customerName = 'Ahmed ali';
var date = new Date();
var month = date.getMonth();
var currMonth = ['january',"February","March","April","May","June","July",
    "August","September","October","November","December"];
    var currMonth = currMonth[month];
    var units = 420;
    var chargePerUnit = 25;
    var netAmount = units * chargePerUnit;
    var latePaySurcharge = 500;
    var grossAmount = netAmount + latePaySurcharge;

    document.write('<h1>'+'K-Electric Bill'+'</h1>')
    document.write("Customer Name: " + customerName + "<br/>");
    document.write("Month: " + currMonth[month]+"<br/>");
    document.write("Number of Units: " + units + "<br/>")
    document.write("Charges per units: " + chargePerUnit + "<br/>");
    document.write("<br/>");
    document.write("Net Amount Payable (within due date " + netAmount + "<br/>");
    document.write("Late Payment Surcharge: " + latePaySurcharge+ "<br/>");
    document.write("Net Amount Payable (within due date) : " + grossAmount+ "<br/>" );















