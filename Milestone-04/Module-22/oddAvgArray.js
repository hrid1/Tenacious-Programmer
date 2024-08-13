function oddAvg (numbers) {
    let sum = 0;
    let count = 0;
    for (number of numbers){
        if(number%2!==0){
            sum+=number;
            count++;
        }
    }
    const avg = sum/count;
    return avg;
}


const numbers = [12, 17, 20, 24, 35, 8];
const ans = oddAvg(numbers);
console.log(ans);