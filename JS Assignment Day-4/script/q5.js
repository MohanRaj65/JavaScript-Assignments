console.log('Q5');

// debugger;
let persons = [{
    name: "Mohan",
    salary: 10000,
    sales: 500,
    reward: [],
},
{
    name: "venky",
    salary: 20000,
    sales: 6000,
    reward: [],
},
{
    name: "Hemanth",
    salary: 30000,
    sales: 11000,
    reward: [],
},
{
    name: "Ela",
    salary: 22000,
    sales: 40000,
    reward: [],
}
];
// console.log(persons[0].salary);

for (i = 0; i < persons.length; i++) {
    if (persons[i].sales >= 0 && persons[i].sales <= 5000) {
        persons[i].reward = persons[i].salary * 2 / 100;
        console.log(`The Total commission earned by ${persons[i].name} is ${persons[i].reward}`);
    }
    else if (persons[i].sales >= 5001 && persons[i].sales <= 10000) {
        persons[i].reward = persons[i].salary * 5 / 100;
        console.log(`The Total commission earned by ${persons[i].name} is ${persons[i].reward}`);
    }
    else if (persons[i].sales >= 10001 && persons[i].sales <= 20000) {
        persons[i].reward = persons[i].salary * 7 / 100;
        console.log(`The Total commission earned by ${persons[i].name} is ${persons[i].reward}`);
    }
    else if (persons[i].sales > 20000) {
        persons[i].reward = persons[i].salary * 10 / 100;
        console.log(`The Total commission earned by ${persons[i].name} is ${persons[i].reward}`);
    }

}


