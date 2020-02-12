# Num Loops

### Setup

Write a function that, given a number, prints a string in the following format, with n replaced by the number:

######### Challenge n #########

Call this function BEFORE EVERY SINGLE challenge number below. Since every function we write for this one will `console.log` its results, this will make it easy for us (and you!) to see whether you're passing each challenge.

### Number Challenges

1. Write a function that prints the numbers from 1 to 5. Note that, since we're hard-coding everything, no parameters are required! Now call it and observe your console. You should see 1 on the first line, then 2 on the second, and so on.
2. Did you remember to call your challenge banner printing function? Call it now, and before each one from now on. And also go back if you didn't and call it before the first one. Now! Write a function that prints the numbers from 1 to whatever number is passed in as a parameter. Call your function with 6 as the parameter.
3. Write a function that takes in two parameters and prints the numbers from the first to the second, INCLUSIVE.
4. Write a function that prints the numbers from 1 to the number given, and then "Odd" if it's an odd number and "Even" if it's an even number, going through each number from 1 to whatever is passed in. Print these two things on one line or two--up to you! Call it with 5, and you should get something like:
1 Odd
2 Even
3 Odd
4 Even
5 Odd
Or, if you did it on two lines:
1
Odd
2
Even
3
Odd
4
Even
5
Odd
5. Print the even numbers ONLY from 1 to whatever number is passed in (inclusive). Call it with 11, and make sure you're getting 2, 4, 6, 8, and 10 printed out!
6. Write a function that prints the numbers from 10 to 1, in descending order. Now call it!
7. Write a function that prints the numbers from 10 to 1, in descending order, followed by "Blast off!". Now call it!
8. Write a function that prints the numbers from the parameter given down to 1, in descending order, counting by 3s. Then call it with 20. You should see 20, 17, 14, 11, and so on. Do not print 1 or anything below it.


### String Challenges

9. Write a function that prints "Hello!" seven times, each time PRECEDED by the number we're on, a period, and a space. Note that, since we're hard-coding everything, no parameters are required! Now call it and observe your console. Count 'em up and make sure there are 7 printings!
10. Write a function that prints in the same format as above, and also 7 times, but with a string passed in instead of a hard-coded string. Call it with the string of your choosing.
11. Write a function that takes in a string and a number and prints that string that number of times. Now call it with the parameters of "Good-bye..." and 4. You should see that string print that number of times!
12. Write a function that takes in a string and prints every character individually of its string parameter. Then call it with "think". You should see the "t" printed, then the "h" on the next line, and so on.
13. Write a function that prints every second character of its string parameter individually. Call it with "Nobody", and make sure you're printing "o", followed by "o", followed by "y".
14. Write a function that prints a string backwards. (Do NOT use `.join` for this).


### Challenge Challenges

15. FizzBuzz! Write a function that takes in a number and prints the EACH integer from 1 to that number, inclusive. If the number is a divisible by 3, print "Fizz" instead of the number. If it's divisible by 5, print "Buzz" instead of the number. If it's divisible by both, print "FizzBuzz". Now call it with 15 and check the output.
16. Fibonacci! Write a function that takes in a number and prints each Fibonacci number (starting with 1 and 1) from 1 to that number, inclusive.