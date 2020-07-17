// console.log('welcome');
let get =Number( prompt('what is your mark.mark should be between 1-100'));

while (get > 100) {
    alert('Enter mark below 100');

    get =Number( prompt('what is your mark.mark should be between 1-100'));
}



    if (get >= 80 && get <=100) {
        a = 'A';
      

    }
    else if (get >= 40 && get < 80)  { 
        a = 'B';

    }
    else {
        a = 'C';

    }
    console.log(`Marks are ${get} and grade is ${a}`);


let w=(get >= 80 && get <=100)? 'A' : (get >= 40 && get < 80)? 'B' : 'c';

console.log(`Marks are ${get} and grade is ${w}`);

