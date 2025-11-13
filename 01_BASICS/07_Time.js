let myTimeStamp = Date.now()
console.log(myTimeStamp);
// Outputs the number of milliseconds since January 1, 1970
 console.log(Date.now);
// Outputs the function definition of Date.now
console.log(Date.now()/1000);
// Outputs the number of seconds since January 1, 1970
console.log(Math.floor(Date.now()/1000));
// Outputs the number of whole seconds since January 1, 1970

let myDate = new Date()
console.log(myDate);
// Outputs the current date and time in a human-readable format
console.log(myDate.getMonth());
// Outputs the current month (0-11)
console.log(myDate.getDay());
// Outputs the current day of the week (0-6)
console.log(myDate.toLocaleDateString('default', { weekday: 'long' }));
// Outputs the current day of the week in long format (e.g., "Monday")