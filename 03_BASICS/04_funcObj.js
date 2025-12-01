// Creating an object that stores food details
const user = {
Foodname : "Burger",
Price : 99
}
// Function that receives an object and prints its values
function Food(anyobject){
    console.log(`Your order is ${anyobject.Foodname} and your bill is ${anyobject.Price}`);
}
// Food(user)   // Calling the function and passing the user object

// ---------------------------------------------------------------------------------
// Add or Update direct object argument 
Food({
    Foodname : "Pizza",
    Price : 149
})
