/* There are seven types of console objects
 1.console.log() - It is used to print the output in the console part of the browser we are using.*/
// Some examples
console.log('5'); //this prints the number 5
console.log('Mohan'); //This prints Mohan 
console.log(['apple', 'mango','orange']);  //This prints the array it contains.

/*
2.colsole.error() - This prints a error message in the console . console.error() is useful while testing a code*/ 
console.error("An ERROR has been occured");

/*
3.colsole.warn() -This prints a warning message in the console. It is highlighted with yellow color*/ 
console.warn("This is a Warning Message");

/*
4.console.clear() - What this just do is It clears the console page*/ 
 console.clear();

 /*
 5.console.time and console.timeEnd () - is used to calculate and show the time spend by a block.*/
 console.time()
 var a=25;
 var b=50;
if (a>b)
{
    b='Pass';
}
console.log(a);
console.timeEnd()

