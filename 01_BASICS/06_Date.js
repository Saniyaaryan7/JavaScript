let myDate = new Date()
console.log(myDate.toString());   // Prints full date and time with the current date

console.log(myDate.toDateString());  // Prints only the date part → e.g., "Thu Nov 07 2025"

console.log(myDate.toLocaleString()); // Prints date and time in local format → e.g., "07/11/2025, 6:45:12 pm"

console.log(typeof myDate);  // Object


let mycreatedDate = new Date(2025,0,12) // Creates a custom date (Year: 2025, Month: Jan (0), Day: 12)
console.log(mycreatedDate.toLocaleString()); // Prints → "12/1/2025, 12:00:00 am"

let mycreatedDate2 = new Date(2025,0,12,5,5) // Creates date with specific time (5:05 AM)
console.log(mycreatedDate2.toLocaleString());  // Prints → "12/1/2025, 5:05:00 am"

let mycreatedDate3 = new Date("2025-01-14") // Prints → "6/1/2025, 12:00:00 am"
console.log(mycreatedDate3.toLocaleString()); // Prints → "14/1/2025, 5:30:00 am"

let mycreatedDate4 = new Date("01-06-2025") // Creates date using MM-DD-YYYY format
console.log(mycreatedDate4.toLocaleString()); // Prints → "6/1/2025, 12:00:00 am"