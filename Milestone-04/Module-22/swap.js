function swapNumber(num1, num2) {
  let temp = num1;
  num1 = num2;
  num2 = temp;

  console.log(`Num is: ${num1} and ${num2}.`);
}

let a = 5;
let b = 8;
swapNumber(a, b);
