console.log('q2');

class use {
    constructor(name,age,email){
        this.name =name;
        this.age =age;
        this.email =email;
    }
    login(){
        console.log(`${this.name} has logged in`);
    }
    logout(){
        console.log(`${this.name} has logged out`);
    }
}