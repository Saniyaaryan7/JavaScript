// Object Literals

const mySym = Symbol ("Key1")

const JsUser = {
    name : "Saniya",
    "Full Name" :"Saniya Aryan",
    [mySym] :"myKey1",
    mySym :"myKey1",
    Age : 21,
    location : "Jaipur",
    email : "aryansaniya32@gmail.com",
    isloggedin : false,
    LastloggedinDays : ["Monday","Friday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["Full Name"])
console.log(JsUser[mySym])
console.log(typeof JsUser[mySym])

