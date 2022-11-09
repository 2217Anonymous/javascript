function message(msg){
    const con       = document.getElementById("container")
    const div       = document.createElement("div");
    div.className   = "alert alert-success";
    const text      = document.createTextNode(msg);
    div.append(text)
    con.prepend(div)
}

message("Your ❤ Data added Successfull")

// let foodElement = document.getElementById("list-group");

// console.time("fragment")

// for(i=1; i<=10; i++){
//     let liEl = document.createElement("li")
//     liEl.textContent = `❤ Food Item's ${i}`
//     liEl.className = "list-group-item";
//     foodElement.append(liEl)
// }

// console.timeEnd("fragment")
// console.time("fragment")
// let fragmenEl = document.createDocumentFragment()

// for(i=1;i<=1000;i++){
//     const li        = document.createElement("li")
//     li.textContent  = `❤ Food Item's ${i}`;
//     li.className    = "list-group-item";
//     fragmenEl.append(li);
// }

// foodElement.append(fragmenEl)
// console.timeEnd("fragment")



const factory = document.getElementById("list-group");

const favFoods = [
    "🥩 Non-Veg",
    "🍚 Curd",
    "🥜 Nuts",
    "🧁 Ice-Cream",
]

const foodFragment = document.createDocumentFragment();

favFoods.forEach((food) => {
    const li            = document.createElement("li");
    li.className        = "list-group-item list-group-item-action list-group-item-secondary d-flex justify-content-between align-items-center";
    li.textContent      = `${food}`
    const spanEl        = document.createElement("span");
    li.append(spanEl)
    spanEl.setAttribute('onClick',"removeItem(event)")
    spanEl.innerHTML    = `<i class="fa-solid fa-trash"></i>`

    foodFragment.append(li);
})

factory.append(foodFragment)

// factory.insertAdjacentHTML('afterbegin',"<li>Food List</li>")
// factory.insertAdjacentHTML('afterend',"<li>Food List</li>")
// factory.insertAdjacentHTML('beforebegin',"<li>Food List</li>")
// factory.insertAdjacentHTML('afterend',"<li>Food List</li>")

const foodContainer = document.querySelector("#list-group");
const firstDt = document.querySelector(".list-group :last-child")
//console.log(firstDt);

// const li = document.createElement("li")
// li.textContent = "🍕 Pizza";
// li.className = "list-group-item list-group-item-action list-group-item-secondary d-flex justify-content-between align-items-center";
// firstDt.replaceWith(li,firstDt)

const dublicateBtn = document.getElementById("resync")
const duplicateEl   = document.getElementById("duplicate")

dublicateBtn.addEventListener("click",() =>{
    duplicateEl.innerHTML = "";
    const cloneEl       = factory.cloneNode(true)
    
    duplicateEl.append(cloneEl) 
});


let btn     = document.getElementById("btn")
let data    = document.getElementById("foodInput")
let response= document.getElementById("list-group")

// console.log(response);

btn.addEventListener("click",() => {
    // response.innerHTML += `<li class="list-group-item"> ❤ ${data.value} </li>`

    const li            = document.createElement("li");
    li.className        = "list-group-item list-group-item-action list-group-item-secondary d-flex justify-content-between align-items-center";
    li.textContent      = `❤ ${data.value}`
    const spanEl        = document.createElement("span");
    li.append(spanEl)
    spanEl.setAttribute('onClick',"removeItem(event)")
    spanEl.innerHTML    = `<i class="fa-solid fa-trash"></i>`

    foodFragment.append(li);
    factory.append(foodFragment)
});
 
function removeItem(event){
    let removeData = event.target.parentNode.parentNode;
    removeData.remove()
}


for(let i=1000;i>=0;i--){
    if(i % 2 == 0){
        console.log(`This is Even Number ${i}`);
    }
//     else{
//         console.log(`This is Odd Number ${i}`);
//     }
}


const datas = {
    /*key*/ fname : "Venkat",
    /*key*/ lname : "Venkat",
    /*key*/ age   : 26,
}

console.log(datas);

for(let dt in datas){ //key[fname,lname,age]
    console.log(dt);
    console.log(`key ${dt} : ${datas[dt]}`);
}