// console.log("Q7");
// debugger;
let v1 = Number(prompt("Enter a Number"));

loop:
for (let num1 = 2; num1 <= v1; num1++){
    for (num2 = 2; num2 < num1; num2++) {
        if (num1 % num2 == 0) {
            continue loop;
        }
    }
    console.log(`${num1} is a Prime Number`);
}
