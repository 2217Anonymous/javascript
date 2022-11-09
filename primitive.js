x = 10
y = x

x = 30

console.log(x)
console.log(y)


a = {
    value:20
}

b = a

a.value = 30

console.log(b)

let cart = {
    price : 100
}

function update(a){
    console.log(a++);
}

update(cart.price)
console.log(cart);