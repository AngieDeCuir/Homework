//Have the variables reference the name of your Pizza Place and the number of toppings your Pizza Place offers.
let  pizzaPlace = "Pizza Planet";
let  numberOfToppings = "30";
//Print the variables and their types.
console.log(pizzaPlace);
console.log(numberOfToppings);

//Print a template literal that uses both variables to construct a short sentence about your Pizza Place.
`"Welcome to Pizza Planet!" "We have 30 toppings you can choose from!"`
//Construct an if statement that prints "Quality, not quantity." if you offer less than 10 toppings, or "A whole lot of pizza." if you offer 10 or more toppings.

if (numberOfToppings <10){
  console.log("Quality,not quantity.");
}else {
  console.log("A whole lot of pizza.");
}
//Use a loop to print all of the even numbers from 1 to numberOfToppings (or 10)
for (let i = 2; i <= 10; 2+i++){
  console.log(i);
}
//I know it is not correct but I wanted to know how to fix it