// const numbers = [2,3,4,5,6,7,8,9,0,];
// numbers.fill(22,33,44);
// console.log(numbers);



const numbers = [1,2,3,4,5,76,6,78,9,9,8];

numbers.fill(0,3,7);
// value , start, end
// 0 will be filled, start from 3rd index, End before 7th index
// [1, 2, 3, 0, 0, 0, 0, 78, 9, 9, 8] // output

console.log(numbers);
