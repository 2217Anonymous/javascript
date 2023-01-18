const data          = document.getElementById("foodInput")
const btn           = document.getElementById("btn")
const ul            = document.getElementById("list-group")
const resync_btn    = document.getElementById("resync")
const foodFragment  = document.createDocumentFragment()

btn.addEventListener("click",function() {
    const li        = document.createElement("li")
    li.className    = "list-group-item list-group-item-action list-group-item-secondary d-flex justify-content-between align-items-center"
    li.textContent  = "💖" + data.value
    const span = document.createElement("span")
    li.append(span)
    span.innerHTML  = `<i class="fa-solid fa-trash"></i>`

    span.setAttribute("onClick","deleteItem(event)")
    ul.append(li)
})


function deleteItem(e){
    const removeItem = e.target.parentNode.parentNode
    removeItem.remove()
}

resync_btn.addEventListener("click",()=>{
    const duplicate  = document.getElementById("sync")
    duplicate.innerHTML = "";
    const cloneData = ul.cloneNode(true)
    duplicate.append(cloneData)
})

const inputt = document.getElementById("foodInput")
const input = inputt.attributes

// for(let i=0;i<=input.length;i++){
//     console.log(input[i]);
// }

// for(let data in input){
//     console.log(input[data]);
// }

input.forEach = ((value => console.log(value,key)))

const button = document.querySelector("#btn")

button.removeAttribute("class")

button.style.cssText = "background:royalblue;color:#fff;border:none;padding:6px 8px;"
console.log(button);


const body = document.getElementById("bdy")
const jumb = document.getElementById("jumb")

function dark(){
    body.classList.replace("bg-light","bg-dark")
    jumb.classList.replace("bg-light","bg-dark")
    console.log(body.classList);
}
function light(){
    body.classList.replace("bg-dark","bg-light")
    jumb.classList.replace("bg-dark","bg-light")
    console.log(body.classList);
}

function toggle() {
    body.classList.toggle("bg-dark")
    jumb.classList.toggle("bg-dark")
}

setTimeout(() => {
    body.classList.toggle("bg-dark")
    jumb.classList.toggle("bg-dark")
},2000)();
