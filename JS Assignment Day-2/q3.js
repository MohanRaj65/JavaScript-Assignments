// console.log("vanakam");
let van="There are many monkey in the monkey temple";
van = van.search('monkey');
console.log(van);

let van1="I loves ice creams very much."
van1=van1.slice(8,18)
console.log(van1);

let van3="I like gaming very much."
// van3=van3.substring(5,10)
van3=van3.substr(5,10)
console.log(van3);

let van4="I'm sometimes very crazy";
van4=van4.substr(7,13)
console.log(van4);

let van5=" I'm Batman";
van5=van5.replace("Batman","Heman")
console.log(van5);

//Array methods.
let arr=["naruto","sasuke","Kakashi"];
let arr1=["Oruchimaru","Kabutto","Akatski"]
arr=arr.concat(arr1);
console.log(arr);

arr=arr.copyWithin(3,0,2)
console.log(arr);

let arr2=['cat','dog','horse','cow'];
console.log(arr2);

let arr3=arr2.fill('seahorse');
console.log(arr3);

let arr4=arr2.fill("rat",1,3);
console.log(arr4);

let pet=['got','snake','monkey','bull'];
pet=pet.sort();
console.log(pet);

let qw=[50,100,4,8,1];
qw= qw.sort(function(a,b){return a-b});
console.log(qw);



qw= qw.sort(function(a,b){return b-a});
console.log(qw);




