// let user1 = {
//     name        : "Venkat",
//     age         : 26,
//     intrest     : ["Cricket","Computer"],
    
//     greetings : function(){
//         let msg = `My Name is ${this.name},i love ${this.intrest[0]} & ${this.intrest[1]}`
//         console.log(msg);
//     }
// };

// let userDetails={
//     city    : 'Tiruppur',
//     state   : 'TN',
// }

// // for(let dt in userDetails){
// //     user1[dt] = userDetails[dt]
// // }

// // console.log(user1);
// // console.log(userDetails);

// user1 = Object.assign({},userDetails)
// console.log(userDetails);

// user1 = {
//     ...userDetails
// }
// console.log(user1);

const userDt = [
    {
        id:1,
        name:"Apple"
    },
    {
        id:1,
        name:"Banana"
    },
]

let res = userDt.find((userDt)=> userDt.name = "Banana")

console.log(res);