/*Difference between var , let , const.
1. var is used to declate a variable of any data type. It's declaration is globally scoped or function scoped. 
    If the variable is declared in global it can be called anywhere inside the code and 
    the values can be changed and can be redeclare. Where as if the variable is declared in the function scope it cant be called outside the function scope. 
    we can change the value inside the function scope and the changed value is only affected inside function scope . It wont affect the values in the global scope. 
    var can be re-declared and updated within a scope.*/
1.
    var a=20;
    console.log(a); // this prints the value 20 in console
2.
var a= 30
    function demo()         //
    { 
        var a=30;                    //this is Function Scope
        var a=70;
        console.log(a); 
       }   //
 
   demo(); 
   console.log(a);

   /*
   2. let is also used to declare a variable of any data type. The let cant be re declared within its scope
    */

   1.
    let c=10;
   console.log(c);   // this prints the value 10 in console

   2.
    let d='apple';
    let e='mango';
   function demo2()
   {
        let d= 'jackfriut';         
       console.log(d);
    
   }
 demo2();
 //let d="orange"; we cannot re declare
 console.log(d);
 console.log(e);

 /*
 const - the const must be initialized during declaration.*/

//  3.
 //const f; must initialized during declaration.
 const f=500;
 function demo3()
 {
     const f=4000;
     console.log(f)
 }
 demo();
 console.log(f);