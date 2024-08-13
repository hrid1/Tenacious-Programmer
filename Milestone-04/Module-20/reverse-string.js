const sentence = 'I am Learing Web Dev.'

let reverse = '';

for(const letter of sentence){
    reverse = letter + reverse;
}
// console.log(reverse)

// ---------> 2

const reverse2 = sentence.split('').reverse().join('');
console.log(reverse2); 