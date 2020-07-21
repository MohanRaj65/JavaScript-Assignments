// console.log("q1");
let value = Number(prompt("Enter a Positive value between "));
while (value <= 0) {
    value = Number(prompt("Enter a Positive value between "));
}
let arr = [];



let odd = arr.filter(arr => arr % 2 != 0)
console.log(odd);

let cube = odd.map(odd => odd ** 3)
console.log(cube);




