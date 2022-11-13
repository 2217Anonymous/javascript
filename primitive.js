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

