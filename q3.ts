let personName="MUhammad ali"
console.log("Uppercase :",personName.toUpperCase())
console.log("Uppercase :",personName.toLowerCase())
let word=personName.split(" ")
let titleCase=""
for(let i=0;i<word.length;i++){
    titleCase=titleCase+word[i].charAt(0).toUpperCase()+word[i].slice(1).toLowerCase()+" "
};
console.log("Titlecase :",titleCase)


