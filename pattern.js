let row = 6;
let string = "";
console.log(string +="venkat");

let pattern = function(){

    for(let i=1;i<=row;i++){                    
        for(k=1;k<=(row-i);k++){        
            document.write("&nbsp;")    
        }                               
        for(j=1;j<=i;j++){              
             document.write("❤" )         
        }                               
        document.write("<br/>")     
    }

    //      *
    //     * * 
    //    * * *
    //   * * * *
    //  * * * * *
}

pattern()

document.write("--------------------------------------------------------<br>");

function square(){
    for(i=1;i<=row;i++){
        for(j=1;j<=6;j++){
            document.write("😎 ")
        }
        document.write("<br/>")
    }

    // * * * * * *
    // * * * * * *
    // * * * * * *
    // * * * * * *
    // * * * * * *
    // * * * * * *
}
square()

document.write("--------------------------------------------------------<br>");

function left_Triangle(){
    for(i=1;i<=row;i++){
        for(j=1;j<=i;j++){
            document.write("😍 ")
        }
        document.write("<br/>")
    }

    //  *         
    //  * *
    //  * * *
    //  * * * *
    //  * * * * *
}
left_Triangle()

document.write("--------------------------------------------------------<br>");

function right_Triangle(){
    for(i=1;i<=row;i++){
        for(k=1;k<=(row-i);k++){         // 6-1=5; 6-2=4
            document.write("&nbsp")
        }

        for(j=1;j<=i;j++){
            document.write("😂 ")
        }
        document.write("<br/>")
    }
}

right_Triangle()

 

let n = 6
for(i=0;){

}