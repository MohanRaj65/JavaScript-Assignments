console.log('q3');
//Please comment the q1.js while running q3.js. 

const name = (prompt('Enter your name', 'alpha'));
rar.innerText += `Welcom to the Webpage ${name}`;

function clock() {
    let date = new Date();
    let time = date.toLocaleTimeString();
    clo.innerText = time;
}

setInterval(clock, 1000)

const dar = document.getElementById('darkb');
const night = document.getElementById('dark');
dar.onclick = DarkMode = () => {
    if (night.getAttribute('Dark') != "black") {
        night.classList.toggle('nightmodeon');

    } else {
        night.classList.toggle('nightmodeoff');
    }

}