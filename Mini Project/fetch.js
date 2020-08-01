function ran(){
let num = Math.random() * 1600;
num = parseInt(num);

fetch("https://type.fit/api/quotes")
    .then(Response => Response.json())
    .then(qot => 
        document.getElementById("rand").innerHTML=`"${qot[num].text}" 
        <br> <br> - ${qot[num].author} `);
}
/*the icon */
// function myFunction() {
//   var x = document.getElementById("rightnav");
//   if (x.rightnav === "topnav") {
//     x.rightnav += " responsive";
//   } else {
//     x.rightnav= "rightnav";
//   }
// }



