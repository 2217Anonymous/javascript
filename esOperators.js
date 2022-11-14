let name = "Venkat"
fname = name //Deep Copy value
fname="sakthi"
console.log("-------------------------------------");
console.log(`Fiest Name : ${name} Last Name : ${fname}`);
console.log("-------------------------------------");
let a = 26
Age = a //Deep Copy
console.log("-------------------------------------");
console.log('age :',Age);
console.log("-------------------------------------");

let obj = {
    name:"venkat",
    age:26,
    dob : 1996
}
let person = {...obj} // shallo Copy memory
person.name = "Sakthi";
console.log("-------------------------------------");
console.log(obj);
console.log(person);
console.log("-------------------------------------");




function personData(a,b,...args){
    
    console.log("-------------------------------------");
    for(let c of args){
        console.log(c)
    }
    console.log("-------------------------------------");

    return a.name + ' ' + b.name
}

let obj1 = [
    {
        name:"Venkat",
        age:26,
        dob : 1996,
        mail : 'venkatanonymous248@gmail.com'
    },
    {
        name:"Anonymous",
        age:26,
        dob : 1996,
        mail : 'venkateshwaran.sort@gmail.com'
    },
    {
        name:"Venkat",
        age:26,
        dob : 1996,
        mail : 'venkatanonymous248@gmail.com'
    },
    {
        name:"Anonymous",
        age:26,
        dob : 1996,
        mail : 'venkateshwaran.sort@gmail.com'
    },
]
console.log("-------------------------------------");
console.log(personData(...obj1));
console.log("-------------------------------------");
