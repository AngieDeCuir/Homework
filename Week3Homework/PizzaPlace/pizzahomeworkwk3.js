//Create an array of pizzaToppings with at least four different toppings
const pizzaToppings = ["cheese","mushrooms","onions","olives"];


/*Create a greetCustomer function that prints a message that welcomes a guest, then informs them of the available toppings by looping over pizzaToppings (don't worry about perfect grammar here yet, i.e. "a, b, and c", see Bonus Challenge #9)
i.e. "Welcome to Pizza House, our toppings are: a, b, c, ..."*/
 // loop over the array concatenate the toppings to the greeting 
function greetCustomer() {

    let greeting = `Welcome to Pizza Planet, our toppings are: `;
    for (let topping of pizzaToppings){
        greeting += `${topping}, `;
    }
        console.log(greeting);
}
    greetCustomer();
 







/*Create a getPizzaOrder function that
has the parameters size, crust, and an indefinite amount of toppings as inputs
prints the order, i.e. "One large thick crust pizza with x, y, z, ... coming up!"
outputs a list with the size, crust, and toppings*/


  function getPizzaOrder(size, crust, ...toppings) {
     let order = `One ${size}, ${crust} crust pizza with `;
     for (let topping of toppings) {
            order += `${topping},`;
  }
  console.log(`${order}...Coming up!`);
  return [size, crust, toppings];
}
let customerOrder = getPizzaOrder("medium", "deep dish", "olives", "mushrooms");



/*Create a preparePizza function that
has an array as its parameter with three items: a size, a crust, and a list of toppings
prints something like "...Cooking pizza..."
outputs a pizza Object with appropriate key-value pairs for size, crust, and toppings*/
function preparePizza([size1, crust2, toppings3]) {
    console.log("...your pizza is cooking...");
    let pizzaObj = {
        size: size1,
        crust: crust2,
        toppings: toppings3,
    };
    return pizzaObj;   
}
    let cookedPizza = preparePizza(customerOrder);






/*Create a servePizza function that
has a parameter of a pizza Object
logs a message that the pizza is ready and repeats the order, i.e. "Order up! Here's your large thick crust pizza with x, y, z, ... Enjoy!"
outputs the same pizza Object that was passed in*/
function servePizza(pizza) {
    let orderReady = `Order up! Here is your ${pizzaSize}, ${pizzaCrust} crust pizza with`;
        for(let topping of pizza.toppings){
            orderReady += `${toppings},`;
        }
        console.log(`${orderReady}. Enjoy!`);
        return pizza;
}





//Call each function and (starting with preparePizza) use the returned value from the previous function as its input

greetCustomer();
const myPizza = servePizza(
    preparePizza(getPizzaOrder("medium", "deep dish", "olives", "mushrooms"))
);
    console.log(myPizza)


 

//Add, commit, and push your JS file to your GitHub repo.

//Send your TA a link to your GitHub Homework repo when finished.

//An example output for this assignment is:

//Welcome to The Pizza House, our toppings are: pepperoni, sausage, onions, peppers, One large thin crust pizza with sausage, onions, peppers, . Coming up! ...your pizza is cooking... Order up! Here's your large thin crust pizza with sausage, onions, peppers, . Enjoy!














//Bonus Challenge
/*Figure out how to add "and" before the last topping in a list of toppings so when we list toppings it is more grammatically correct. You could create a listToppings function that stores the functionality, and call the function each time we list toppings in a function.
i.e. "Our toppings are a, b, and c." instead of "Our toppings are a, b, c"*/

/*In getPizzaOrder, if an order is placed with no toppings, print a slightly different message, like "One large thick crust cheese pizza coming up!" (Instead of "One large thick crust pizza with coming up!"). Alter servePizza in a similar way to fix its grammar when serving a "plain" cheese pizza.*/

/*In getPizzaOrder, check the toppings the customer ordered against your list of available toppings. If they order a topping you don't offer, print a message that informs them you don't offer that topping and to order again.*/
