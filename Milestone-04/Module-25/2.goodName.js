function checkName (name){
    name = name.toLowerCase();
    const leter = ['a','y','i','e','o','u', 'w'];
    const len = name.length;
    const lastChar = name[len-1];
    console.log(lastChar);
    if(leter.includes(lastChar)){
        return "Good Name"
    }
    return "Bad Name";

}

const testName = checkName('SalmaE');
console.log(testName);