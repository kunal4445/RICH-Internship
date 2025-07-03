let array1=["item1","item2"];
let one=["item3","item4"];
let array2=[...array1,...one,..."item5"];

array1.push("item6");
console.log(array1==array2);
console.log(array1);
console.log(array2);














