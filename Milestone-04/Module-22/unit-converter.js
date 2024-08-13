function inchToFeet (inch) {
    const feet = inch / 12;
    return feet;
}


function mileToKm (mile) {
    const km = (mile * 1.6).toFixed(2);
    return km;
}


const result = inchToFeet(20);
console.log(result);

const ans = mileToKm (12);
console.log(ans);