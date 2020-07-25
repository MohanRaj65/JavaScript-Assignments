console.log("Changing color of the document after 5 sec")

let i = 0;


setInterval(function backgroundChange() {
    colors = ["orange", "red", "blue", "green"];
    document.body.style.backgroundColor = `${colors[i]}`;
    if (i < colors.length) {
        i = i + 1;
    }
    if (i > colors.length - 1) {
        i = 0;
    }
}, 5000);