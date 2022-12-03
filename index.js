

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

// let table = "<table border='1' cellspacing = '0' width ='500px' cellpadding='15'>";

// for (i= 1; i <= 10; i++)  {
//     table += "<tr>";
//         for(j=1; j <= 10; j++) {
//             table += "<td>" + j * i + "</td>";

//         }
//     table += "</tr>";
// }
// table += "</table>";
// document.write(table);

// let password = "sesame, open the door";
// let spell;
// do {
//     spell = prompt("Please enter a spell.");
// } while(spell !== password);
// alert ("The door will be opened successfully.")


// Practice: Using a for loop:
// Lesson 1: Write a program to display the string "The number is N" 5 times using a for loop. With N will display from 0 to 5.

// for (i = 0; i <= 5; i++){
//     document.write("The number is " + i + "</br>");
// }

//Lesson 2: Write a program to input any number greater tha 0. Calculate the sum of the elements from 1 to the number you just entered.

// let number = parseFloat(prompt("Enter any number."))
// let total = 0;
// for (i = 1; i <= number; i++){
//     total += i;
// }
// alert(total);

// function play() {
//     let number = prompt("Enter the largest number.");
//     let random = Math.floor(Math.random() * number);
//     console.log(random);
//     let i = 1;
//     do {
//         let guessNumber = prompt("Enter the number you guess");
//         if (guessNumber == random) {
//             alert ("You guess correct.");
//             break;
//         } else{
//             alert(" incorrect, Please try again.")
//         }
//         i++;
//             if (i > 3) {
//                 alert("You guess over 3 times, please playing again.");
//                 break;
//             }
//     } while (i <= 3);   
// }


// Exercise: Print the Fibonacci sequense:
// Describe: According to Wikipedia, the Fibonacci Sequence is an infinite sequence of natured numbers staring with two elements 0 and 1 or 1 and 1, the elements of which are then established according to the rule that each element if always equal to the sum of the two preceding numbers it. Fomula of th Fibonacci sequence is:

// let number = Math.abs(parseInt(prompt("Enter a number to print the Fibonacci sequence.")));
// let a = 1;
// let b = 1;
// document.write(a + "</br>");
// document.write(b + "</br>");
// let total;

// while(number > 2) {
//     total = a + b;
//     document.write(total + "</br>");
//     a = b;
//     b = total;
//     number--;
// }

// Exercise: Reverse Numbers:
// Describe: Write a application that allows you to input a positive integer and print it is reverse numbers to the screen:
// Tha way 1: Using length of string to take a last element in th string:
// let btn = document.getElementById("btn");
// btn.addEventListener('click', reverse);
// function reverse() {
//     let input = document.getElementById("input").value;
//     let total = "";
//     for (i = input.length-1; i >= 0; i--) {
//         total += input[i];

//     }

//     document.getElementById("ouput").value = total;
// }
// let del = document.getElementById("cancel");
// del.addEventListener('click', cancel);
// function cancel() {
//     document.getElementById("input").value = "";
//     document.getElementById("ouput").value = "";
   
// }

// The way 2: Using function split to convert array and then reverse array just created, finally, function join to convert array to string and print result:
 
// let btn = document.getElementById("btn");
// btn.addEventListener('click', reverse);
// function reverse() {
//     let input = document.getElementById("input").value;
//     let convertArray = input.split("");
//     let reverseArray = convertArray.reverse();
//     let joinArray = reverseArray.join("");
//     document.getElementById("ouput").value = joinArray;
// }
// let del = document.getElementById("cancel");
// del.addEventListener('click', cancel);
// function cancel() {
//     document.getElementById("input").value = "";
//     document.getElementById("ouput").value = "";
// }

// Note: Brief code above:
// let btn = document.getElementById("btn");
// btn.addEventListener('click', reverse);
// function reverse() {
//     let input = document.getElementById("input").value;
//     let result = input.split("").reverse().join("");
//     document.getElementById("ouput").value = result;
// }
// let del = document.getElementById("cancel");
// del.addEventListener('click', cancel);
// function cancel() {
//     document.getElementById("input").value = "";
//     document.getElementById("ouput").value = "";
// }


// The way 3: Reverse a string by query:



//Exercise: Generating multiplication table by JavaScript:
//Describe: Write a application to print out a time with the following interface:

// let table = "<table border='1' width='800px'  align='center'>";
// for(i = 1; i <= 9; i++) {
//     table += "<tr>";
//     for (j = 2; j <= 9; j++) { 
//         table += "<td align='left'>" + j + "x" + i + "=" + j * i + "</td>";
//     }
//     table += "</tr>";
// }
// table += "</table>";
// document.write(table);


// Exercise: Draw a triangle.
// Describe: Write a application the allows to print squere triangles according to the pattern:

// Triangle 1:

// for(i = 1; i <= 5; i++) {
//     for (j = 1; j <= 5; j++){
//         if (j <= i) {
//             document.write("*");
//         }
//     }
//     document.write("</br>");
// }
// document.write("</br>");

// Triangle 2: 

// for (i = 5; i >= 1; i--) {
//     for (j = 1; j <= 5; j++) {
//         if (j <= i) {
//             document.write("*");
//         }
//     }
//     document.write("</br>");
// }
// document.write("</br>");
// document.write("</br>");

//Triangle 3:

// for(i = 5; i >= 1; i--) {
//     for(j = 1; j <= 5; j++ ) {
//         if (j < i) {
//             document.write("&nbsp&nbsp");
//         }
//     }
//     for (h = 5; h >= 1; h--) {
//         if (h >= i) {
//             document.write("*");
//         }
//     }
//     document.write("</br>");
// }
// document.write("</br>");

//Triangle 4:

// for(i = 5; i >= 1; i--) {
//     for(j = 1; j <= 5; j++ ) {
//         if (j <= i) {
//             document.write("*");
//         }
//     }
//     document.write("</br>");
//     for (h = 5; h >= 1; h--) {
//         if (h >= i) {
//             document.write("&nbsp&nbsp");
//         }
//     }
   
// }

// Exercise: Sum of numbers in the range:
//Describe: In the section, we will develop an application that calculates the sum of numbers between a and b (including a and b).

// let a = parseFloat(prompt("Enter number a."));
// let b = parseFloat(prompt("Enter number b."));
// let total = 0;

// if (a <= b) {
//     for(i = a; i <= b; i++) {
//         total += i;
//     }
// } else {
//     for (i = b; i <= a; i++) {
//         total +=i;
//     }
// }
// alert(total);

// Exercise: Show the first primes numbers:
// Describe: In this section, we will develop an application that will display the first 20 prime numbers.

//let number = prompt("Enter a number to check prime number")

// function checkPrime(number) {
//     let flag = true;
//     if (number < 2) {
//         flag = false;
//     } else {
//         for (i = 2; i <= number-1; i++){
//             if (number % i == 0) {
//                 flag = false;
//                 break;
//             }
//         } 
//     }
//     if (flag == true) {
//         return true;
//     } else {
//        return false;
//     }
// }
// checkPrime();
// let numb = prompt("Enter prime numbers. ");
// let count = 1;
// let n = 2;
// while (count < numb) {
//     if (checkPrime(n)) {
//         document.write(n + "</br>");
        
//     }
//     count++;
//     n++;   
// }

// Exercise: Loop practice:
// Describe: Practice using while loop; do....while:

// Lesson 1:  Use a loop to count from 1 to 100. When the number 99, display dialog box saying it is done:

// let i = 1;
// do {
//     document.write(i + "</br>");
//     i++;
// } while (i < 100);
// alert("It is done");


// Lesson 2: Use the prompt() function to get the current temperature information entered by the visitor. If the input temperature is above 100, ask the user to reduce the temperature. If the temperature is below 20, ask the user to increase the temperature.

// let degrees = prompt("Enter the temperature you want.");
// if (degrees > 100 ) {
//     alert("Reduce the temperature")
// } else if (degrees >= 20) {
//     alert("The temperature is normal")
// } else {
//     alert ("Increase the temperature.")
// }

// Exercise 3: Display the 20 numbers in the first fibonacci sequense.

// let number = Math.abs(parseInt(prompt("Enter a number to print the Fibonacci sequence.")));
// let a = 1;
// let b = 1;
// document.write(a + "</br>");
// document.write(b + "</br>");
// let total;
// let count = 2;
// while(number > 2) {
//     total = a + b;
//     document.write(total + "</br>");
//     a = b;
//     b = total;
//     number--;
//     count++;
//     if (count > 19) {
//         break;
//     }
// }



// Exercise 4: Search the first number in the fibonacci sequence that is divisible by 5:

// let number = Math.abs(parseInt(prompt("Enter a number to print the Fibonacci sequence.")));
// let a = 1;
// let b = 1;
// let total;
// while(number > 2) {
//     total = a + b;
//     a = b;
//     b = total;
//     number--;
//     if (total % 5 == 0) {
//         document.write(total);
//         break;
//     }
// }


// Exercise 5: Calculate the sum of the first 20 number in the fibonacci sequence:

// let number = Math.abs(parseInt(prompt("Enter a number to print the Fibonacci sequence.")));
// let a = 1;
// let b = 1;
// let total;
// let count = 2;
// let result = a + b;
// while(number > 2) {
//     total = a + b;
//     a = b;
//     b = total;
//     number--;
//     count++;
//     result += total;
//     if (count == 20) {
//         document.write(result);
//         break;
//     }
// }


// Exercise 6: Calculate the sum of the first 30 numbers divisible by 7 of natural numbers.

// let total = 0;
// let count = 0;
// for (i = 0; i <= 1000; i ++) {
//     if (i % 7 == 0) {
//         total += i;
//         count++;
//         if (count == 30) {
//             document.write(total);
//             break;
//         }
//     }
// }

// Exercise 7: Write a program to print the numbers from 1 to 100. But if the numbers divisible by 3 to print "Fizz", divisible by 5 to display "Buzz" instead to print that number, and if divisible by borth 3 and 5 to display "FizzBuzz".
// You can use loop structure and swith-case statement.

for (i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        document.write("FizzBuzz" + "</br>");
    } else if (i % 3 == 0) {
        document.write("Fizz" + "</br>");
    } else if (i % 5 == 0) {
        document.write("Buzz" + "</br>");
    } else {
        document.write(i + "</br>");
    }
}



//  ----------Array------------
// Lesson Objective: 

