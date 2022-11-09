function userCreation(name,pass){
    return{
        username : name,
        password : pass,
        auth(){
            let msg = `This is your username ${this.username} and ${this.password}`
            console.log(msg);
        }
    };
}

let login = userCreation('anonymous','2217@Anonymous')
login.auth()


function Person(firstname){
    this.name = firstname;
    this.gretting= function(){
            let msg = `This is your name ${this.name}`;
            console.log(msg);
        }
    return this
}

const dt = new Person('Venkat')
dt.gretting()

const data = {
    name : 'Abcd',
}

data.age=20,
data.age=21,
console.log(data);