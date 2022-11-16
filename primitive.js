// let a = {
//     value:10
// };

// function demo(data){
//     let b = data.value++
    
// }

// let c = demo(a)
// console.log("data",a);
const Old_Cart      = ["Cricket Bat","Ball","Football"]
const New_Cart      = ["Helmet","Gloves"]
const Shopping = [{
    iteam : "Tennis Ball",
}]

let Order = Old_Cart.concat(New_Cart,...Shopping)
console.log(Order);

Order.forEach((data,dataIndex) => console.log(data))

const Old_Object = [
    {id:1,name:"Cricket Bat"},
    {id:2,name:"Ball"},
    {id:3,name:"Football"},
]
Old_Object.sort(function(a,b){
    if(a.name < b.name) return -1; 
    if(a.name > b.name) return 1; 
    if(a.name === b.name) return 0; 
});

console.log(Old_Object);