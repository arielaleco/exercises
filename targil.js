
function DoExcercise() {

    PrintThis("----- Excercise 1 -----");
    //  targil1();
    //ssss
    PrintThis("----- Excercise 2 -----");
    targil2();
    PrintThis("----- Excercise 3 -----");
    //   targil3()
    PrintThis("----- Excercise 4 -----");
    //   targil4();
    PrintThis("----- Excercise 5 -----");
    //   targil5();
    PrintThis("----- Excercise 6 -----");
    //   targil6();


    PrintThis("");
    PrintThis("");
    PrintThis("");
    PrintThis("");

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

function targil2() {
    //According to Wikipedia a happy number is defined by the following process:
    //"Starting with any positive integer, replace the number by the sum of the squares of its
    //digits, and repeat the process until the number equals 1(where it will stay), or it loops
    //endlessly in a cycle which does not include 1. Those numbers for which this process
    //ends in 1 are happy numbers, while those that do not end in 1 are unhappy numbers
    //    (or sad numbers)". 
    //Write a JavaScript program to find and print the first 5 happy numbers. 

    var numFound=0;
    while (numFound<6)
    {

    }
    



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
    var strLine;
    for (var i = 1; i < 7; i++) {
        strLine = "";
        for (var j = 0; j < i; j++) {
            strLine = strLine + "*";
        }
        PrintThis(strLine);
    }


}
function targil5() {
    //5. Write a JavaScript program to compute the greatest common divisor (GCD) of two
    //positive integers.

    // algoritem - take the smalles of them both
    var x = prompt("Targil 5 - insert a number :");
    var y = prompt("Targil 5 - insert another number :");
    var big = x, small = y;
    if (y > x) {
        big = y;
        small = x;
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