// console.log("Q4");
// debugger;
let val = Number(prompt("Enter the correct value form the condition bellow 1.Addition,2.Subtraction,3.Multiplication,4.Division,5.Square root,6.Percentage"));
while (val <= 0 || val > 6) {
    val = prompt("Enter the correct number. 1.Addition,2.Subtraction,3.Multiplication,4.Division,5.Square root,6.Percentage");
}



entry1 = () => {
    val1 = Number(prompt('Enter the first value for the first calculation'));
    val2 = Number(prompt('Enter the second value for the calculation'));
    return val1, val2;

}
entry2 = () => {
    val3 = Number(prompt("Enter the Number"));
    return val3;
}


if (val == 1) {
    entry1();
    console.log(val1 + val2);
}

if (val == 2) {
    entry1();
    console.log(val1 - val2);
}

if (val == 3) {
    entry1();
    console.log(val1 * val2);
}

if (val == 4) {
    entry1();
    console.log(val1 / val2);
}

if (val == 5) {
    entry2();
    console.log(Math.sqrt(val3));
}

if (val == 6) {
    entry1();
    console.log((val1 + val2) / 2);

}
