const name = "Saniya"
const repocount = "20"

console.log(`my name is ${name} and my repocount is ${repocount}`);

const anothername = new String('Aryan');
console.log(anothername.length); // Shows the total number of characters in the string
console.log(anothername.toUpperCase()); // Convert all letters in the string to uppercase
console.log(anothername.charAt(2));// Shows the character at index 2 (remember, counting starts from 0)
console.log(anothername.indexOf('a'));// Finds the index of the first occurrence of 'a' in the string

const newstring = anothername.substring(0,4)
console.log(newstring);// Extracts a part of the string from index 0 to 4 (excluding 4)

const newstringone = "  Computer"
console.log(newstringone); 
console.log(newstringone.trim()); // Removes spaces from both ends of the string

const url = "https://saniya.com/saniya%20aryan"
console.log(url.replace('%20','-')); // Replaces '%20' in the URL with a '-'
console.log(url.includes('saniya')); // Checks whether the word 'saniya' exists in the URL (returns true/false)
