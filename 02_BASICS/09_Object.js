const Jsuser = {
    email : "aryansaniya7@gmail.com"
}

// Accessing object values (both ways)

// console.log(Jsuser.email);    //Dot notation
// console.log(Jsuser["email"]); //Bracket notation

Jsuser.email = "saniya45@gmail.com"  // Update the email property
Object.freeze(Jsuser)
Jsuser.email = "sanna76@gmail.com"   // Trying to change the email again (this will NOT work because object is frozen)
console.log(Jsuser)

