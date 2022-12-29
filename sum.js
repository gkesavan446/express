// console.log(process.argv)

// const [, , num] = process.argv;
// const [, , , num1] = process.argv;

const [, , num, num1] = process.argv;

const addition = (a, b) => parseInt(a) + parseInt(b);
// console.log(addition(1, 2));
console.log(addition(num, num1));