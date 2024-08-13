function getTallest(numbers){
    let max = numbers[0];
    for(const num of numbers){
        if(num>max){
            max = num;
        }
        
    }
    return max;
}



const heights = [12, 23, 45, 29, 18, 34, 69];
const result = getTallest(heights);
console.log(result);