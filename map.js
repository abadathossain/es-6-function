const numbers = [2, 4, 6, 8];
const newNum = numbers.map(num => {
    return num * 2
})
// console.log(newNum);

const frinds = ['abc', 'efg', 'mnop'];

const length = frinds.map(frnd => {
    // return frnd.length;
    return frnd[0];
})
console.log(length)