const person = true

const p = new Promise((resolve,reject)=>{
    if(person){ console.log("Successfull");}
    else{console.log("Failed");}
}).then((meg)=>meg).catch((meg)=>meg)