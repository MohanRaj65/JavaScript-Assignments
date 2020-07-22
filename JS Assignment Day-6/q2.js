console.log("printing a multiplication tables on the webpage by gettin input from user")

var num1 = Number(prompt("Enter a number between 1-10", 0));
var iteration = (prompt("Enter how many time you want to iterate", 0));


let multa = document.querySelector('#tables');
// console.log(multa)
// multa.innerHTML=


for (i = 1; i <= iteration; i++) {
    mul = num1 * i;
    tables.innerHTML += `<p> ${num1} x ${i} = ${mul} </p>`;
}

