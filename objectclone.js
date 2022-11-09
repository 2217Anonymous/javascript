let user = {
    name        : "Venkat",
    age         : 26,
    intrest     : ["Cricket","Computer"],
    address     : {
        city    : 'Tiruppur',
        state   : 'TN',
    },
    greetings : function(){
        let msg = `My Name is ${this.name},i love ${this.intrest[0]} & ${this.intrest[1]}`
        console.log(msg);
    }
};

// let another = Object.assign({},user)
 
let another = {
    ...user
}
console.log(another.greetings);
// let data = user
// console.log(data.address);

// let another = {}
// for(let a in user){
//     another[a] = user[a]
// }
// console.log(another);