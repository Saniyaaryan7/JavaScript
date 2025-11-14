const marvel_heros = ["Ironman","Thor","Spiderman"]
const DC_heros = ["Flash","Superman","Batman"]

marvel_heros.push(DC_heros)  // Push DC array inside Marvel array (nested array created)
console.log(marvel_heros);  // [ 'Ironman',  'Thor',   'Spiderman', [ 'Flash', 'Superman', 'Batman' ] ]
                             //    index-0  ||  index-1 ||  index-2   ||          index-3  

console.log(marvel_heros[3]);  // ["Flash","Superman","Batman"]

console.log(marvel_heros[2]); // ["Spiderman"]

console.log(marvel_heros[3][2]); //["Batman"]

