function empCreation(id,name,gender,salary){
    return{
        id:id,
        name:name,
        gender:gender,
        salary:salary,
        auth(){
            let msg = `hi ${name} this is your ${id}, Your salary ${salary}`
            console.log(msg)
        }
    }
}

let emp = empCreation(2002,'Venkat','Male',10000)
emp.auth()