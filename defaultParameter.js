let GSTCalculator = function(cost,tax = 25){
    //let tax1 = tax ?? 18
    let Tax = cost * (tax/100)
    let totalAnoumt = cost + Tax 
    console.log(`Amount : ${cost} 
Tax Amount : ${Tax}
Total Amount : ${totalAnoumt}` );
} 

GSTCalculator(900,10)