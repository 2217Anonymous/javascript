class Person{
    constructor(u,p,e,ph){
        this.userName = u;
        this.password = p;
        this.email    = e;
        this.phone    = ph;
    }
    get display(){
        console.log("-----------------------------------------------------------------------------------------");
        console.log(`UserName : ${this.userName} Password : ${this.password} Email : ${this.email} Phone : ${this.phone}`);
        console.log("-----------------------------------------------------------------------------------------");
    }
    set emailid(value){
        this.email = value;
    }
    set uname(value){
        this.userName = value
    }
}

let User = new Person("anonymous",'2217@n@nym@u$','venkatanonymous248@gmail.com','7530008253')

User.display;
User.emailid = "venkateshwaran.sort@gmail.com";
User.uname = "Venkateshwaran";
User.display