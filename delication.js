const tbl = document.querySelector("table")

let selectedId;
tbl.addEventListener('click',(event)=>{
    const target = event.target
    const closestEl = target.closest("tr")

    if(target.tagName === 'TH') return

    if(selectedId != undefined){
        selectedId.classList.remove("active")
    }

    selectedId = closestEl
    closestEl.classList.add("active")
})

const formEl = document.querySelector("#donateForm")

formEl.addEventListener("submit",(event)=>{
    event.preventDefault()
    const donateAmount = event.target.querySelector("input").value
    alert(`Thank you for donating ₹${donateAmount}`)
})

const donateEl = document.querySelector("#donate")
donateEl.addEventListener("click",()=>{
    formEl.hidden = !formEl.hidden
})