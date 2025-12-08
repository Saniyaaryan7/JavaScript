const userloggedin = true
const debitcard = false
const loggedinfromgoogle = true
const loggedinfronemail = false

// AND (&&) condition -> both must be true
if(userloggedin && debitcard){
    console.log("Allow to buy course");  // Runs only if user is logged in AND has debit card
}

// OR (||) condition -> at least one must be true
if(loggedinfromgoogle || loggedinfronemail){
console.log("User loggedin");    // Runs if user logged in through Google or Email
}