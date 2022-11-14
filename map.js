let map = new WeakMap();
let obj1 = {
    name : "Venkat"
}

function counter(abc){
    let count = map.get(abc) || 0;
    map.set(abc,count + 1)
}

let result = counter(obj1)
obj1 = null
console.log(obj1);