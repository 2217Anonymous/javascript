let users = {
    fname       : 'venkateshwaran',
    lname       : 'Venkat',
    email       : 'venkat@gmail.com',
    password    : '2217@anonymous'
}


let arrayData = ['bat','ball',users]

function check(value){
    let dtd = arrayData.includes(value)
    if(dtd==true){
        console.log(arrayData.indexOf(value));
    }
    else{
        console.log("Data missing");
    }
}

check("ball")



// let data = `my name is ${users.fname} and this is my email id ${users.email} then my password ${users.password}`
// console.log(data);

// console.log('---------------------------------------------------------')
// console.log(data.slice(11,25).toUpperCase())
// console.log(data.slice(50,66))
// console.log(data.slice(-14))
// console.log('---------------------------------------------------------')
// // for(let user of Object.entries(users)){
// //     let dt = user
// //     console.log("---------------------------------------------------");
// //     console.log(dt[1].toUpperCase());
// //     console.log("---------------------------------------------------");
// // }
