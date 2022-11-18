let User = {
    username    : "Anonymous",
    password    : "2217@Anonymous",
    Email       : "venkatanonymous@gmail.com",
    get show(){
        console.log(`Your username : ${this.username} Your password : ${this.password} Your email id : ${this.Email}`);
    },
    set user(value){
        if(typeof(value)!="string") throw "its not a string";
        if(value.length <=3) throw "Invalid Name";
        let name = value.split(" ");
        fname = name[0];
        lname = name[1] ?? "";
        this.username = fname+lname;
    }
}

try {
    User.user = "Venkateshwaran"
    console.log(User.show);
}
catch(er){
    alert (er)
}