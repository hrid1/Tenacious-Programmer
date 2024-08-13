
// 3 ways to create objects

const car = {
    brand: 'Lambogini',
    price: 10,
    color: 'blue'
}
console.log(car);
// ---------
const mobile = new Object();
console.log(mobile);

const pen = Object.create({});
console.log(pen)

