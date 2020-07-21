console.log('q2');

class User {
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.coins = 50;
        this.course =[]
    }
    login() {
        console.log(`${this.name} has logged in`);
    }
    logout() {
        console.log(`${this.name} has logged out`);
    }
}

class Moderator extends User {
    addcoins(User) {
        User.coins++;
        console.log(`${User.name} have ${User.coins} coins`)
    }
    deletecoins(User) {
        User.coins--;
        console.log(`${User.name} have ${User.coins} coins`)
    }
}

class Admin extends Moderator{
    addcourse(User,course){
        User.course.push(course);
        console.log(User);

    }
    deletecourse(User,course){
        User.course.pop(course);
        console.log(User);
    }
}


let user1 = new User('Mohan', 21, 'mohu@gmail.com')
let user2 = new User('Raj', 22, 'raj@gmail.com')
let mod = new Moderator('Rajini',25,'raji@gmail.com')
let admin =new Admin("Kamal",30,'kamal@gmail.com'); 

User=[user1,user2,mod,admin];

mod.addcoins(user2);
mod.deletecoins(user1);

admin.addcourse(user1,'Javascript')
admin.deletecourse(user1,'Javascript')