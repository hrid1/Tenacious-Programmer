function calculateMoney (noTicket){

    if(noTicket<0){
        return "Invalid Number!"
    }
   const totalSell = noTicket*120;
   const cost = 500 + (8*50);
   const profit = totalSell - cost;
   return profit;
}

const money = calculateMoney(-12);
console.log(money);