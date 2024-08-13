function totalNumbers (numbers) {
    // console.log(numbers);
    let total = 0;
    for(const num of numbers){
        total+=num;
    }
    return total;

}

const sum = totalNumbers([12, 8, 5, 6, 9, 3]);
// console.log('Sum of numbers is', sum);

function evenList (numbers) {
    const evenNumbers = [];
    for(const num of numbers){
        if (num%2 == 0){
            evenNumbers.push(num);
        }
    }
    return evenNumbers;
}

const evNum = evenList([12, 7, 3, 6, 10]);
console.log(evNum); 