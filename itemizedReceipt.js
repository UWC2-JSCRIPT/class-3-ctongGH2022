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
  const saleTax = .1; //let sale tax be 10% 
  let subTotal = 0;  //total before tax
  let totalTax = 0;  //total tax
  let totalCost = 0; //total after tax

  //calculate subtotal before tax
  for (const item of menuItems){
    subTotal += item.price;
    console.log(`${item.descr} - $${item.price}\n`);
  }
  
  //calculate totalTax 
  totalTax = subTotal*saleTax;
  
  //calculate total cost after tax
  totalCost = subTotal + totalTax;
 
  //display to console
  console.log(`Subtotal - $${subTotal.toFixed(2)}`);
  console.log(`Tax - $${totalTax.toFixed(2)}`);
  console.log(`Total - $${totalCost.toFixed(2)}`);
  console.log(`---------------------`);
}

//call function with different params to check
logReceipt(burrito);
logReceipt(burrito, chip);
logReceipt(burrito, chip, drink);
logReceipt(burger, bud);