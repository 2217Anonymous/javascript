let user = {
    name:"Anonymous",
    details(){
        console.log(`Welcome to our company $(this.name)`);
    }
}

for(let key in user){
    console.log(key,user[key])
}

for(let entry of Object.entries(user)){
    console.log(entry);
}