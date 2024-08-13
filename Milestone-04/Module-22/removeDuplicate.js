function removDuplicate(numbers) {
  // console.log(numbers);
  const newNumbers = [];
  for (const item of numbers) {
    if (!newNumbers.includes(item)) {
      newNumbers.push(item);
    }
  }
  return newNumbers;
}

const numbers = [2, 3, 2, 5, 6, 7, 5, 6, 9];
console.log(removDuplicate(numbers));
