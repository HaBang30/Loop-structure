

// Practice: Using While Loop:

//Lesson 1: Write a program to receive a number from the dialog box, the input ends when the user enters the value -1. Each input value will displayed and the sum of those values will be performed.

// let number = parseFloat(prompt("Enter a number you want."));
// let total = 0;
// while (number !== -1) {
//     total += number;
//     alert("Sum is " + total);
//     number = parseFloat(prompt("Enter a number you want."));
// }
// document.write("Sum is " + total);


// Lesson 2: Write a program that display the <hr> tag in width from 1 to 100. The result will be display as shown:

// let horizon = 1;
// while (horizon <= 100) {
//     document.write("<hr width = " + horizon + "%>" );
//     horizon ++;
// }



// Practice: Using  do-while Loop.

// Lesson 1: Use the do-while loop to write a program that entering the numbers from 1 -> 10 in the example at the while loop:
// let number = null;
// do {
// number = prompt("Enter number 1 - 10:")
// alert("The number you just entered is " + number);
// } while (number < 1 || number > 10);

// Practice: using nested loop.
// Describe: Write a program displays the table with the following data:

let table = "<table border='1' cellspacing='0' width='300' cellpadding='5'>"
for (i = 1; i <= 10; i++) {
    table += "<tr>";
    for ( j = 1; j <= 10; j++) {
        table += "<td>" + j * i + "</td>";
    }
    table += "</tr>";
}
table += "</table>"
document.write(table);


