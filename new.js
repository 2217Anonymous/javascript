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