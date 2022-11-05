/**
 * Cecilia Tong
 * Homework #3
 * Tuesday 11/1/2022
 * Itemized Receipt
 */

// create function logReceipt that accepts menu items (1 or many) as objects
// with these properties: {descr, price} i.e. {descr: 'Coke', price: 1.99}
// function should log each item to the console and log a total price

//some items on the menu
const bud = {descr:'Bud Light', price: 3.99};
const burger = {descr:'Hamberger', price: 6.99};
const burrito = {descr:'Burrito', price: 5.99};
const chip = {descr:'Chips & Salsa', price: 2.99};
const drink = {descr: 'Sprite', price: 1.99};

//function lodReceipt using rest params
function logReceipt(...menuItems){
  let totalCost = 0;
  for (const item of menuItems){
    totalCost += item.price;
    console.log(`${item.descr} - $${item.price}\n`);

  }
  console.log(`Total - $${totalCost}
---------------------------------`);
}

//call function with different params to check
logReceipt(burrito);
logReceipt(burrito, chip);
logReceipt(burrito, chip, drink);
logReceipt(burger, bud);