
function DoExcercise() {

    PrintThis("----- Excercise 1 -----");
    targil1();
    
    PrintThis("----- Excercise 2 -----");
    targil2();
    PrintThis("----- Excercise 3 -----");
    targil3()
    PrintThis("----- Excercise 4 -----");
    targil4();
    PrintThis("----- Excercise 5 -----");
    targil5();
    PrintThis("----- Excercise 6 -----");
    targil6();


    // PrintThis("");
    // PrintThis("");
    // PrintThis("");
    // PrintThis("");

}
function targil1() {
    //Write a JavaScript program which iterates the integers from 1 to 100. But for
    //multiples of three print "Fizz" instead of the number and for the multiples of five print
    //"Buzz". For numbers which are multiples of both three and five print "FizzBuzz". 
    var myStr = "";
    for (i = 0; i < 101; i++) {
        myStr = "";
        if ((i % 3) == 0) {
            myStr = "Fizz";
        }
        if ((i % 5) == 0) {
            myStr = myStr + "Buzz";
        }
        PrintThis(i + " ==> " + myStr);
    }
}

function checkSumOfDigist(strToCheck) {

    var symOf = 0;

    for (i = 0; i < strToCheck.length; i++)  // go over all digits
    {
        oneDigit = Number(strToCheck[i]);
        symOf = symOf + (oneDigit * oneDigit);
    }
    return symOf;
}
function targil2() {
    //According to Wikipedia a happy number is defined by the following process:
    //"Starting with any positive integer, replace the number by the sum of the squares of its
    //digits, and repeat the process until the number equals 1(where it will stay), or it loops
    //endlessly in a cycle which does not include 1. Those numbers for which this process
    //ends in 1 are happy numbers, while those that do not end in 1 are unhappy numbers
    //    (or sad numbers)". 
    //Write a JavaScript program to find and print the first 5 happy numbers. 


    // algoritem - start go over the numbers from 1
    // stop condition - when 5 are found 
    // how to check :
    // for any number - convert to string - start iterate on its digits


    var numAsStr = "", listToPrint = "";
    var i, j = 0, sumOf, numFound = 0;

    var howMany = prompt("How many happy Numbers you like to find ?");
    var numHowMany = Number(howMany);

    while (numFound < numHowMany) {

        // for (var j = 0; j < 100; j++) { 
        //PrintThis("--------- checking :"+j);       
        //while (numFound < 6) {        
        numAsStr = j.toString();
        for (i = 0; i < 10; i++)  // do it 10 times
        {
            //PrintThis("checking :"+numAsStr);
            sumOf = Number(checkSumOfDigist(numAsStr));
            //PrintThis("sumOf :"+sumOf);
            if (sumOf == 1) {
                listToPrint = listToPrint + " , " + j;
                numFound++;
                break;
            }
            else {
                numAsStr = sumOf.toString();
            }
        }
        j++;
    }
    PrintThis("All Happy Numbers :" + listToPrint);


};
function targil3() {
    //Write a JavaScript program to find the armstrong numbers of 3 digits.
    //Note : An Armstrong number of three digits is an integer such that the sum of the
    //cubes of its digits is equal to the number itself. For example, 371 is an Armstrong
    //number since 3**3 + 7**3 + 1**3 = 371. 
    var numAsStr, tmp;
    var oneDigit, sumOf;

    PrintThis("All armstrong number with 3 digits :");
    for (var j = 100; j < 1000; j++) {
        numAsStr = j.toString();
        sumOf = 0;
        for (var i = 0; i < numAsStr.length; i++) {
            oneDigit = Number(numAsStr[i]);
            tmp = (oneDigit * oneDigit * oneDigit);
            sumOf = sumOf + (tmp);
        }

        if (sumOf == j) {
            PrintThis(j);
        }

    }



}

function targil4() {

    //  להגדיר מערך מספרי עם תוכן (נגיד 10 תאים).
    // להדפיס את הערך המקסימאלי במערך
    //להדפיס את סכום המערך
    var x;
    var myArr = [];
    var maxValue , sumOf=0;

    // insert 10 random number to the array
    for (var i = 0; i < 10; i++) {
        x = Math.floor((Math.random() * 50) + 1);
        myArr.push(x);
    }
    PrintThis("array contains 10 random numbers ==> " + myArr);
    maxValue = myArr[0];
    sumOf=maxValue;
    for (var i = 1; i < 10; i++) {
        if (myArr[i] > maxValue) { maxValue = myArr[i]; }
        sumOf+= myArr[i];
    }
    PrintThis("Biggest is " + maxValue);
    PrintThis("Total Sum  is " + sumOf);


}
function targil5() {
    //5. Write a JavaScript program to compute the greatest common divisor (GCD) of two
    //positive integers.

    // algoritem - take the biggest of them both
    var x = Number(prompt("Targil 5 - insert a number :"));
    var y = Number(prompt("Targil 5 - insert another number :"));
    var big = x, small = y;
    if (y > x) {
        big = y;
        small = x;
    }
    var startFrom = small;
    ((big / 2) < small) ? startFrom = (big / 2) : void 0;
    PrintThis(startFrom);

    // start checking from hald the big one 
    startFrom = Math.floor(startFrom);
    for (var i = startFrom; i > 0; i--) {
        if (((x % i) == 0) && ((y % i) == 0)) {
            PrintThis("Greated division for " + x + " " + y + " is " + i);
            break;
        }
    }



}

function targil6() {
    //Write a JavaScript program to sum the multiples of 3 and 5 under 1000. 
    var allSum = 0;
    for (i = 0; i < 1000; i++) {
        if ((i % 15) == 0) {
            allSum = allSum + i;
        }
        // if ((i % 5) == 0) {
        //     allSum=allSum+i;            
        // }        
    }
    PrintThis("sum the multiples" + " ==> " + allSum);


}