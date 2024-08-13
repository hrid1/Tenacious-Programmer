function deleteInvalids(list) {
    if(!Array.isArray(list)){
        return "Invalid Input"
    }
  const numbers = [];
  for (const item of list) {
    if (typeof item === "number" && (item >= 0 || item <= 0)) {
      // console.log( item +" "+ typeof item);
      numbers.push(item);
    }
  }
  return numbers;
}

const array = [["1", { num: 2 }, NaN]];
const array2 = [1, null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }];
const test = {num: [ 1 , 2 , 3 ]};

const newArray = deleteInvalids(array2);
console.log(newArray);
