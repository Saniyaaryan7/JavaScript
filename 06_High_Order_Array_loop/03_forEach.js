// Array of coding languages
const coding = ["HTML","CSS","JS","PYTHON"];
coding.forEach((val)=>{
    console.log(val)
})

// ---------------------------------------------
// Array of objects containing language details
const myCoding = [{
    languageName : "JAVASCRIPT",
    languageFileName : "JS"
},

{
    languageName : "PYTHON",
    languageFileName : "Py"
},

{
    languageName : "CPP",
    languageFileName : "C++"
},
]
myCoding.forEach((lang) => {
    console.log(lang.languageFileName)   // Prints language file names
})