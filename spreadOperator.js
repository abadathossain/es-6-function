const numbers=[1,2,4,5,6];
const bondhuNums=[...numbers]
numbers.push(9);
// bondhuNums.push(100);
console.log(bondhuNums);
console.log(numbers);

const max1=Math.max(...numbers);
const max2=Math.max(...bondhuNums);
console.log(max1);
console.log(max2);