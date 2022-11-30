const data  = document.getElementById("foodInput")
const btn   = document.getElementById("btn")

btn.addEventListener("click",function() {
    const ul        = document.getElementById("list-group")
    const li        = document.createElement("li")
    li.className    = "list-group-item disabled"
    li.textContent  = "💖" + data.value
    //console.log(li);

    ul.append(li)
})

const duplicate = document.getElementById("sync")
const list_group = document.getElementById("list-group")
const resync_btn = document.getElementById("resync")


resync_btn.addEventListener("click",()=>{

    duplicate.innerHTML = "";
    const cloneData = list_group.cloneNode(true)
    duplicate.append(cloneData)
})