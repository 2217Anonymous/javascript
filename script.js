let users = {
    fname       : 'venkateshwaran',
    lname       : 'Venkat',
    email       : 'venkat@gmail.com',
    password    : '2217@anonymous'
}


//Factory Function

function myFunction(data1,data2){
    return {
        fname       : data1,
        lname       : data2,
        email       : 'venkat@gmail.com',
        password    : '2217@anonymous',
        getFullname(){
            console.log(`Full Name : ${this.fname} ${this.lname}`);
        }
    }
}

let setName = myFunction("Venkat","Anonymous")
setName.getFullname()

//Constructor Function

function Myfunction(data1,data2){
    this.uname = data1,
    this.password = data2,
    this.getUserData = function(){
        console.log(`Username : ${this.uname} 
Password : ${this.password}`);
    }
}

let userData = new Myfunction("Anonymous","2217@Anonymous")
userData.getUserData()

