// let i = 1;
const hash1 = '######### challenge ';
const hash2 = ' #########';

// to print ### challenge ###
function hash(num){
    console.log(hash1+ num +hash2);
}



//1. to print number from 1 to 5
//2. to print number from 1 to n number
function one(n){
    let j = 1;
        while(j<=n){
            console.log(j);
            j++;
    }
}

//3. to print number from num1 to num2 inclusive.
function three(num1, num2){
    while(num1<=num2){
        console.log(num1);
        num1++;
    }
}

//4. to print number from 1 to whatever number(num2) and print odd or even next to it.
function four(num1, num2){
    while(num2>= 1){
        if (num1 % 2 !== 0){
            console.log(num1+' Odd')
        }
        if (num1 % 2 === 0){
            console.log(num1+' Even')
        }
        num2 --;
        num1 ++;
    }
}
//5. to print the even numbers only from 2 to whatever number(num2) is given.
function five(num1, num2){
    num1 = num1 + 1;
    while (num2>=1){
        console.log(num1);
        num1 = num1 + 2;
        num2 = num2 - 2;
    }
}
//6. to print number from 10 to one in descending order.
//7. to print number from 10 to one in descending order and print "Blast off!"
function tenToOne(str){
    let num = 10;
    while (num >=1){
        console.log(num);
        num--;
    }
    if(str){
        console.log(str);
    }
}
//8. to print number from parameter getting less by 3 ..ex if 20-17-14-11...etc
function downByThree(num){
    console.log(num);
    while (num > 1){
        let result = num-=3;
        //so at not to get result below 2 that is -1...(2-3)..so have to do if
        if( result > 1){
            console.log(result);
        }
    }
}
//9. to print hello! seven times with increasing number on it's side.
function hello(num){
    let k=1;
    while(num>=1){
        console.log(k+'. Hello!');
        num--;
        k++;
    }
}
//10. to print whatever str user pass, 7 or whatever times user pass.
//11. to print 'Good-bye...'four times and 'Get out!' six times.
//the above 9 can be done here too..little bit of writing..needed
function hello1(num, str){
    let k = 1;
    while(num>=1){
        console.log(k +'. '+ str);
        num--;
        k++;
    }
}
//12. to print given string 'think' separately in each new line.
//13. to print  whatever string given by user in each new line.
function stringToCharacterOnEachLine(str){
    let i = 0;
    let j = 1;
    while (j <= str.length){
        console.log(str.slice(i,j));
        i++;
        j++;
    }
}
//13. to print  whatever string given by user in each new line.
function stringToCharacterOnEachLine1(str){
    let i = 1;
    let j = 2;
    while (j <= str.length){
        console.log(str.slice(i,j));
        i+=2;
        j+=2;
    }
}
//14.  to print string backwards.
function stringBackwards(str){
    console.log('print "' + str +'" backwards')
    let i = str.length ;
    let j = str.length - 1;
    while ( i >= 1){
        console.log(str.slice(j, i));
        i--;
        j--;
    }
}
//15. to print the given number sequentially and check if it is divisible by 3(fizz) or by 5(Buzz) or by both(fizzBuzz)
function fizzBuzz(num){
    let i = 1;
    let num1 = num;
    while(num >= 1){
        console.log(i);
        num--;
        i++;
    }
    if (num1 % 3 === 0){
        if (num1 % 5 === 0){
            console.log("FizzBuzz");
        } else {
            console.log("Fizz")
        }
    } else if (num1 % 5 === 0){
        console.log("Buzz")
    } else {
        console.log(num1);
    }
}
//16. headache --to print a fibonacci number till the user given number
function Fibonacci(num){
    //the first two number x1 and x2 are 0 and1 ..the first two fibonacci no's
    let x1 = 0;
    let x2 = 1;
    //run' while loop till our result match with user no
     while(x2 <= num || x1 <= num){
        //print the x1
        console.log(x1)
        //if our result(x1)===user num or if the next result(x2) is greater than user no ..then break
        if( x1 === num || x2 > num){
            break;
        }
        //if our result(x1) !== user num..add the previous two no's 
        x1 = x1 + x2;
        
        //print our next result x2
        console.log(x2)
        //if our result(x2) === user num..break off while loop
        if( x2 === num){
            break;
        }
        //if our result(x2) !== user num..add the previous two no's
        x2= x1 +x2;
    }
    //if user num ===1..this will help print 0 1 1 ..instead of only 0 1
    //if user num === 0..result will be 0
    //it will print one more 1..
    if (x2 === 1 && x1 === 1){
        console.log(x2)
    }
}



hash(1);
one(5);
hash(2);
one(6);
hash(3);
three(3, 6);
hash(4);
four(1, 5);
hash(5);
five(1,11);
hash(6);
tenToOne();
hash(7);
tenToOne('Blast off!')
hash(8);
downByThree(20);
hash(9);
hello(7);
hash(10);
hello1(7, 'This is the way!');
hash(11);
hello1(4, 'Good-bye...');
hello1(6, 'Get out!');
hash(12);
stringToCharacterOnEachLine('think');
hash(13);
stringToCharacterOnEachLine1('Nobody');
hash(14);
stringBackwards('back');
hash(15);
fizzBuzz(11);
hash(16);
Fibonacci(22);