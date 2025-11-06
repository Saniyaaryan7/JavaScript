const accountId = 1234
let accountEmail = "aryansaniya7@gmail.com"
var accountPassword = "12345"
 accountCity = "Jaipur"

console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);

// You can change the values of accountEmail, accountPassword, and accountCity
// accountId = 5678 // This will give an error because accountId is a constant
// You can’t reassign the const variable itself,

// but you can still modify the contents (object or array)
const no = { accountId: "5678" };
no.accountId = "67890"; //  Works

accountEmail = "saniyaaryan7@gamil.com"
accountPassword = "67890"
accountCity = "Delhi"
// you can reassign the let and var variables

// you can also use console.table to display variables in a tabular format
console.table([accountId, accountEmail, accountPassword, accountCity]);