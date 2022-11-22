const user = {
    uname:"Anonymous",
    greeting(){
        console.log("Hi Welcome to our Home" + " " + this.uname);
    }
}
let arrayuser = ["venkat",user,24]


// user.fname = "Venkat";
// user.lname = "Anonymous";

// user.fullname=function (){
//     console.log(`${this.fname} ${this.lname}`);
// }

// delete user.fullname()

// for(let dt of Object.keys(user)){
//     console.log(dt);
// }

for(let dt of Object.entries(user)){
    console.log(dt[1]);
}

// for(let dt in user){
//     console.log((user[dt]));
// }

// for(let dt in arrayuser) {
//     console.log(arrayuser[dt]);
// }

// for(let dt of arrayuser){
//     console.log(dt);
// }