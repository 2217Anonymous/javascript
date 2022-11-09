function NewUser(fname,lname){
    this.Fname = fname,
    this.Lname = lname,
    this.greetings=function (){
        let msg=`Hi Welcome ${this.Fname} ${this.Lname}`;
        console.log(msg)
    };
}

let user = new NewUser('Venkat','Anonymous')
user.greetings()
console.log("---------------------------------------------------------------------------------");

let per = "Ano";
let age = 26;
let isAdmin = true;
console.log(per);
console.log(age);
console.log(isAdmin);
console.log("---------------------------------------------------------------------------------");

let firstname = new String("Venkat");
let agee = new Number(28);
let Isemp = new Boolean(true)


console.log(firstname,agee,Isemp);