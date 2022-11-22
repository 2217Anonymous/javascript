let user = {
    uname:"Anonymous",
    greeting(){
        console.log("Hi Welcome to our Home" + " " + this.uname);
    }
}

let arrayuser = ["venkat",user,24]

for(let dt in user){
    console.log(user[dt]);
}

for(let dt in arrayuser) {
    console.log(arrayuser[dt]);
}

for(let dt of arrayuser){
    console.log(dt);
}