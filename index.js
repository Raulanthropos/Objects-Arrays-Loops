/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Create a variable and assign to it an array containing the first 5 positive numbers.
*/

/* WRITE YOUR ANSWER HERE */

let arr1 = [1, 2, 3, 4, 5]
console.log(`\n1. First variable contains the first 5 positive integers. ${arr1}`)

/* EXERCISE 2
 Create a variable and assign to it an object containing your name, surname, email address and age.
*/

/* WRITE YOUR ANSWER HERE */

let firstObject = {
    firstName: "Ioannis",
    lastName: "Psychias",
    emailAddress: "somebody@somemail.com",
    age: 20
}

console.log("\n2. This object contains the following data: ", firstObject)

/* EXERCISE 3
 Add to the previously created object a property with a boolean value to rappresent wheter you have or not a driving license.
*/

firstObject.drivingLicense = false; // Initializing
let licensedOrNot = firstObject.age >= 18 ? firstObject.drivingLicense = true : firstObject.drivingLicense = false; // If age >=18, the person presumably has a driving license.
console.log(`\n3. Your current age is ${firstObject.age}, therefore your current license status is: `, licensedOrNot);

/* EXERCISE 4
 Remove from the previously created object the age property.
*/

delete firstObject.age;
console.log("\n4. Let's see, our first object should no longer have the age as data conveyed: ", firstObject);

/* EXERCISE 5
 Create a second object with another name, surname, email address and verify that this object has a different email address than the previous one.
*/

const secondObject = Object.assign([], firstObject);
secondObject.firstName = "John";
secondObject.lastName = "Morris";
secondObject.emailAddress = "something@somemail.com";

console.log("\n5. I cloned the 1st object and assigned different values to it, let's see if it worked: ", secondObject)

/* EXERCISE 6
 You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
 Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
 Write an algorithm that calculates the total cost to charge the user with.
*/

let userExpenses = 61;
let shippingCostIfLessThan50 = 10;
let totalShoppingCart;

if (userExpenses <= 50) {
    totalShoppingCart = userExpenses + shippingCostIfLessThan50;
    console.log(`\n6. The total cost of this transaction would be the cost of the products you chose, plus the shipping cost of ${shippingCostIfLessThan50}, totaling the amount of ${totalShoppingCart}$.`)
} else {
    totalShoppingCart = userExpenses;
    console.log(`\n6. The total cost of this transaction would be ${totalShoppingCart}$.`)
}

/* EXERCISE 7
 You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
 Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/

blackFridayDiscount = userExpenses - (userExpenses * 0.20);
console.log(`\n ${blackFridayDiscount}`);
if (blackFridayDiscount <= 50) {
    totalShoppingCart = blackFridayDiscount + shippingCostIfLessThan50;
    console.log(`\n7. The total cost of this transaction would be the cost of the products you chose, plus the shipping cost of ${shippingCostIfLessThan50}. With the special Black Friday discount of 20%, the total cost is ${totalShoppingCart}$.`)
} else {
    totalShoppingCart = blackFridayDiscount;
    console.log(`\n7. The total cost of this transaction would be the cost of the products you chose. With the special Black Friday discount of 20%, the total cost is ${totalShoppingCart}$.`)
}

/* EXERCISE 8
 Create a variable and assign to it an object representing a car, with properties like brand, model and licensePlate.
 Then clone it 5 times, and change the licensePlate for each cloned car without affecting the original one.
*/

const car = {
    brand: "Toyota",
    model: "Celica",
    licensePlate: "XIE 9999"
}

const car2 = Object.assign([], car);
const car3 = Object.assign([], car);
const car4 = Object.assign([], car);
const car5 = Object.assign([], car);
const car6 = Object.assign([], car);
car2.licensePlate = "XIZ0001";
car3.licensePlate = "XIZ0002";
car4.licensePlate = "XIZ0003";
car5.licensePlate = "XIZ0004";
car6.licensePlate = "XIZ0005";

console.log("\n 8.a\)The 1st car is this one: ", car)
console.log("\n 8.b\)The 2nd car is this one: ", car2)
console.log("\n 8.c\)The 3rd car is this one: ", car3)
console.log("\n 8.d\)The 4th car is this one: ", car4)
console.log("\n 8.e\)The 5th car is this one: ", car5)
console.log("\n 8.f\)The 6th car is this one: ", car6)


/* EXERCISE 9
 Create a variable called carsForRent and assign to it an array containing all the cars from the previous exercise.
*/

const carsForRent = [car, car2, car3, car4, car5, car6];
console.log("\n9. The available cars for rent, are the following ones: ", carsForRent);

/* EXERCISE 10
 Remove the first and the last car from the carsForRent array.
*/

carsForRent.pop();
carsForRent.shift();
console.log("\n10. The list is now missing two cars: ", carsForRent);

/* EXERCISE 11
 Print to the console the type of the car variable you created before, as well as the types of its licensePlate and brand properties.
*/

console.log("\n11. The types of car, license plate and brand, are as follows: ", typeof car, typeof car.licensePlate, typeof car.brand)

/* EXERCISE 12
 Create a new variable called carsForSale assigning to it an empty array, and then insert 3 cars into it.
 Create a new variable called totalCars and assign to it the total number of cars present in the carsForSale and carsForRent arrays.
*/

carsForSale = [];
carsForSale.push(car2, car3, car4);
const totalCars = carsForRent.concat(carsForSale);
console.log("\n12. The details of cars that are for rent and for sale, are as follows: ", totalCars);

/* EXERCISE 13
 Using a loop, print to the console all the data for each car in the carsForSale array.
*/

console.log("\n13. The cars for sale are the following ones: ");
for (let i = 0; i < carsForSale.length; i++) {
    console.log(carsForSale[i]);
}
