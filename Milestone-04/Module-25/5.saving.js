function monthlySavings(payments, cost){

    if(! Array.isArray(payments) || typeof cost !== 'number'){
        return 'Invalid Input'
    }


    let total = 0;
    for(const money of payments){
        if(money>=3000){
            const mon = money-(money*.2);
            total+=mon;
        }
        else{
            total+=money;
        }
        
    }
    const savings = total - cost;
    // console.log(savings);
    if(savings>=0){
        return savings;
    }
    return "Earn MOre";
}

const payments = [ 900 , 2700 , 3400];
const cost = "hi";

const saving = monthlySavings(payments, cost);
console.log(saving);