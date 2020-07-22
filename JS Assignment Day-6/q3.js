console.log('q3');

const name=(prompt('Enter your name','alpha'));
rar.innerText += `Welcom to the Webpage ${name}`;

function clock(){
    let date=new Date();
    let time=date.toLocaleTimeString();
    clo.innerText = time;
}

setInterval(clock,1000)