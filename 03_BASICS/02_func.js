function loginusername(username){
      // Check if no username was passed (undefined or empty)
    if(username===undefined){   //OR if(!username)
        console.log("Please enter your username");
    }
    return`${username} just loggedin`
}
console.log(loginusername("Saniya"));   // Calling the function with "Saniya"