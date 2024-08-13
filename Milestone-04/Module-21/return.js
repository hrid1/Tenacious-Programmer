function tenTimes(number) {
    const result = number * 10;
    return result;
}

const output = tenTimes(4);
// console.log(output);

function isEven(num){
    if(num%2==0){
       return true;
    }
    else{
        return false;
    }
}

function isOdd(num){
    if(num%2===1){
        return true;
    }
    return false;
}

const num3 = isOdd(5);
console.log(num3);
const num4 = isOdd(8);
console.log(num4);

const num1 = isEven(5);
console.log(num1);
const num2 = isEven(6);
console.log(num2);