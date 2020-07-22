console.log("Changing color of the document after 5 sec")

const ch = document.getElementById("nam");


ch.setAttribute('style','color:orange;');

function colorchange() {
    setTimeout(() => {
        document.body.style.backgroundColor = 'grey';
    },5000);
}
colorchange(); 