let number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const array = number.filter((value,idx) =>{
    console.log(value,idx);
})

let newArray = ["N",1,2,3,4,5,"A",55,{name : "Newton"}];
newArray.forEach((e,index) => {
    if (typeof e=== "object") {
        console.log(e,index);
    }
});









 

// console.log(evenArray);

// let newArray = ["N", 1, 3, 4, 5, "A", 87, { name: "Newton" }];
// newArray.forEach((e, index) => {
//   if (typeof e === "object") {
//     console.log(e, index);
//   }
// });
