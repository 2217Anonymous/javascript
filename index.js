// function demo(name,age,gender,address){
// let person = {
//     name    : firstname,
//     age     : age,
//     gender  : gender,
//     address : address,
//     siblings: {
//         brother : "Surya",
//         age     : 22,
//     } 
// }


// person.age = 25
// console.log(person)
// console.log('-------------------------------------------------------------------------')
// console.log(person.name)
// console.log('-------------------------------------------------------------------------')
// console.log(person.age)
// console.log('-------------------------------------------------------------------------')
// console.log(person.gender)
// console.log('-------------------------------------------------------------------------')
// console.log(person.address)
// console.log('-------------------------------------------------------------------------')
// console.log(person.siblings.brother)
// console.log('-------------------------------------------------------------------------')
// console.log(person.siblings.age)
// console.log('-------------------------------------------------------------------------')

// let color = ['red','black','green']
// color[3] = person
// console.log(color);
// console.log(color[2]);
// console.log(color[3]);
// console.log(color[3].address)
// }

// let firstname   = "Anbu";
// const age       = 26;
// let gender     = 'female';
// let address    = "Tamilnadu,tiruppur,palladam,mahalakshminagar";

// demo(name,age,gender,address)

// let hour = new Date()
// console.log('Date           :',hour)
// console.log('Day            :',hour.getDay())
// console.log('Time           :',hour.getTime())
// console.log('Full Year      :',hour.getFullYear())
// console.log('Day            :',hour.getDay())
// console.log('Date           :',hour.getDate())
// console.log('Month          :',hour.getMonth())
// console.log('Hours          :',hour.getHours())
// console.log('Time Zone      :',hour.getTimezoneOffset())
// console.log('UTC Date       :',hour.getUTCDate())
// console.log('Milliseconds   :',hour.getMilliseconds())

// console.log('-------------------------------------------------------------------------')

// let user = {
//     name        : "Venkat",
//     age         : 26,
//     intrest     : ["Cricket","Computer"],
//     address     : {
//         city    : 'Tiruppur',
//         state   : 'TN',
//     },
//     greetings : function(){
//         let msg = `My Name is ${this.name},i love ${this.intrest[0]} & ${this.intrest[1]}`
//         console.log(msg);
//     }
// };

// console.log(user.name)
// console.log(user.age)
// console.log(user.intrest)
// console.log(user.address)
// user.greetings()

// console.log("----------------------------------------------------");
// console.log("Array Sort")
// console.log("----------------------------------------------------");

// let data = [1,4,8,2]

// let dt = ["venkat","sakthi","surya","manoj"]

// let dtt =[

//     {id : 3 , name : "Venkat"},
//     {id : 4 , name : "Anonymous"},
//     {id : 6 , name : "Surya"},
//     {id : 2 , name : "Sakthi"},
//     {id : 9 , name : "Manoj"},
// ] 

// console.log(data.sort());
// // console.log(dt.sort());
// console.log(dt.reverse());

// data.sort(function(a,b){
//     return b-a;
// });

// console.log(data);

// dtt.sort(function(a,b) {
//     if(a.name < b.name) return -1; 

//     if(a.name > b.name) return 1;   

//     return 0;
// });

// console.log(dtt);


// console.log("----------------------------------------------------");
// console.log("Array Reduce")
// console.log("----------------------------------------------------");

// const salary = [20000,8000,40000,100000]

// let salari = salary.reduce(function(a,b){
//     return a + b
// });

// console.log("Total Salary",salari);

// const order = [
//     {id:1,Product:"Gray Nicolls Bat",Cost:20000,Brand:"GN"},
//     {id:2,Product:"SF Ball Box",Cost:2500,Brand:"SF"},
//     {id:3,Product:"SF Glow",Cost:1000,Brand:"SF"},
//     {id:4,Product:"SF Bad",Cost:2000,Brand:"SF"},
//     {id:5,Product:"SG Helmat",Cost:2000,Brand:"SG"},
// ]

// let myOrder = order.filter((brand)=>{
//     return brand.Brand === "SF"
// }).reduce(function(accumulater,current){
//     return accumulater + current.Cost
// },0);

// console.log("Total Price : ",myOrder);

// let student = {
//     firstname   : "Venkat",
//     lastname    : "Anonymous",
//     get fullname(){
//         return `Your fullname : ${student.firstname} ${student.lastname}`
//     },
//     set fullname(name){
//         if(typeof(name) !="string"){
//             const err = new Error("It's not a String")
//             throw err;
//         } 

//         if(name.length <= 3) throw `This name ${name} is invalid`

//         let names = name.split(" ")
//         this.firstname = names[0]
//         this.lastname = names[1] ?? ""
//         return `Your fullname : ${this.firstname} ${this.lastname}`
//     }
// };

// try {
//     student.fullname = "a";
// } catch (error) {
//     alert(error)
// }


// console.log(student.fullname);

// let btn     = document.getElementById("btn")
// let data    = document.getElementById("foodInput")
// let response= document.getElementById("list-group")

// // console.log(response);

// btn.addEventListener("click",() => {
//     response.innerHTML += `<li class="list-group-item"> ❤ ${data.value} </li>`
// });
// let items = document.getElementsByClassName("list-group-item")
// // console.log(dt[1]);

// const dt = [].map.call(items,(res)=>res.textContent)

// console.log(dt);
let list = document.querySelectorAll("li")
// console.log(list[7].innerText);