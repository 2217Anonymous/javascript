let user = {
    uname:"Anonymous",
    greeting(){
        console.log("Hi Welcome to our Home" + " " + this.uname);
    }
}
let user2 = {
    username:"Surya",
    greeting(){
        console.log("Hi Welcome to our Home" + " " + this.username);
    }
}
let arrayuser = ["venkat",user,24]

let empty = {}
//Method 1
// let userdata = user

// userdata.age = 26

// console.log(userdata);
// console.log(user);

// //Method 2
// let dt = {...user}
// console.log(dt);

//Method 3
// user = {...user2}
// console.log(user);

//Method 4
for(let dt in user){
    empty[dt] = user[dt]
    console.log(`this is empty object ${empty.uname}`);
}

//method 5 - assign
let data = Object.assign({},user)
data.age = 26;
console.log(data);


// user.fname = "Venkat";
// user.lname = "Anonymous";

// user.fullname=function (){
//     console.log(`${this.fname} ${this.lname}`);
// }

// delete user.fullname()

// for(let dt of Object.keys(user)){
//     console.log(dt);
// }

// for(let dt of Object.entries(user)){
//     console.log(dt[1]);
// }

// for(let dt in user){
//     console.log((user[dt]));
// }

// for(let dt in arrayuser) {
//     console.log(arrayuser[dt]);
// }

// for(let dt of arrayuser){
//     console.log(dt);
// }