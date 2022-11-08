//Objects
let User = {
    name : "VENKAT",
    age : 26,
    Sports : ['cricket','football'],
    family : {
        mother : 'mythily',
        father : 'Tiruppathi',
        brother : 'Surya',
        mine    : this.name,   
    },
    welcome : function(){
        let Welcome = `Welcome Our Home Mr.${this.name} and your family ` 
        console.log(Welcome);
    }
}

User.welcome();

//Factory Function 

function createUser(name){
    return {
        name,
        age : 26,
        Sports : ['cricket','football'],
        family : {
            mother : 'mythily',
            father : 'Tiruppathi',
            brother : 'Surya',
            mine    : this.name,   
        },
        welcome(){
            let Welcome = `Welcome Our Home Mr.${this.name} and your family ` 
            console.log(Welcome);
        }
    }
}

let Username = createUser("Venkat")

Username.name;

createUser("Anonymous");

createUser("Sakthi").welcome();

//Constructor Function

function CreatePerson(username){
    let name={
        name:"Anonymous",
    } 
    this.username = username;
    this.greeting = function(){
        console.log(`This is ${name.name}`);
    }
}

let Person = new CreatePerson("Venkat");
Person.greeting();
