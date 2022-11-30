async function asfun(){
    try{
        const data  = await fetch('https://jsonplaceholder.typicode.com/posts')
        if(data.ok === false ){
            throw "Page Not Found";
        }
        const dt    = await data.json() 
        console.log(dt);
    }
    catch(err){
        console.log(err);
    }
}

asfun()