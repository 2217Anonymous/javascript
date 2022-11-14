//Declaration Function
let num1 = 247857848;
let num2 = 648930333;
add(num1,num2)
function add(a,b){
    console.log("-----------------Declaration Function------------------------");
    console.log(a+b);
    console.log(b-a);
    console.log("-------------------------------------------------------------");
}

//Expression Named Function

const func = function addno(a,b) {
    console.log("-----------------Expression Function------------------------");
    console.log(a*b);
    console.log(b/a);
    console.log("-------------------------------------------------------------");
};

func(num1,num2)

//Expression Named Function - Anonymous Function

const fun = (a,b) => {
    console.log("--------Expression Function - Anonymous Function-------------");
    console.log(a*b);
    console.log(b/a);
    console.log("-------------------------------------------------------------");
};

func(num1,num2)

const con = new Function("console.log(num1+num2)")
con(num1,num2)

//IIFS

const iifs = ((a,b) => {
    console.log("----------------------------IIFS-----------------------------");
    console.log(a*b);
    console.log(b/a);
    console.log("-------------------------------------------------------------");
    ((a,b) => {
        console.log("----------------------------IIFS Callback-----------------------------");
        console.log(a+a);
        console.log(b-a);
        console.log("-------------------------------------------------------------");
    })(10,20);
})(num1,num2);