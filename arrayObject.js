//Method 1

let arr = ["a",1,2,3]
console.log(arr);

//Method 2
let arr1 = []
arr1[0] = "venkat"
console.log(arr1);

//Method 3
let arr2 = new Array("Hello");
console.log(arr2);

//Method 4
let arr3 = Array.of (1,2,3,4)
console.log(arr3)

//Slice
let arr4 = [9,8,7,6,5]
let res  = arr4.slice()
console.log(res);   

let empty = []

for(let i=0;i<res.length;i++){
    empty[i] = res[i]
}
console.log(empty);


