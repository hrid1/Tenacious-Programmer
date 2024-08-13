function getMax(num1, num2, num3){
    if(num1> num2){
        if(num1>num3){
            return num1;
        }
        else{
            return num2;
        }
    }
    else{
        if(num2>num3){
            return num2;
        }
        else{
            return num3;
        }
    }
}

const max1 = getMax(4, 5, 17);
const max2 = getMax(4, 15, 7);
const max3 = getMax(14, 5, 7);

console.log(max1);
console.log(max2);
console.log(max3);


const max = Math.max(12, 23, 34, 56, 71, 28, 9);
console.log(max);