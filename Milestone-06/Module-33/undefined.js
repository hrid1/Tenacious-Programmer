/*
#=>8 ways to Get Undefined

1.varibale that is not initialized will give undefined
2.function is no return
3.paramiter that is not passed
4.

*/
// 1.
let frist ;
// console.log(frist);

function second(a,b){
    a+b;
}

// 2.
const ans = second();
// console.log(ans);

// 3.
function thrid(a, b, c){
    console.log(a+b+c);
}
thrid(2,3);
