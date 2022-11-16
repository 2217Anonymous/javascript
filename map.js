const map = new Map()
let abc = {
    user : "Anonymous"
}

function counter(obj){
    let count = map.get(obj) || 0;  
    map.set(obj,count + 1)
}
counter(abc)
abc = null;
map.forEach((value,key)=>{console.log(`Kay ${key.user} value:${value}`)})
