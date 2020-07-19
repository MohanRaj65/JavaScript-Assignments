// console.log("Q2");

const student = {
    name: "Helsinki",
    age: 24,
    projects: {
        diceGame: "two player dice game using JavaScript"
    }
}
console.log(student);

const { name, age, projects: { diceGame } } = student;

console.log(`${name}, ${age} , ${diceGame}`);