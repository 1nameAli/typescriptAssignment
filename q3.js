var personName = "MUhammad ali";
console.log("Uppercase :", personName.toUpperCase());
console.log("Uppercase :", personName.toLowerCase());
var word = personName.split(" ");
var titleCase = "";
for (var i = 0; i < word.length; i++) {
    titleCase += word[i].charAt(0).toUpperCase() + word[i].slice(1).toLowerCase();
}
;
console.log(titleCase);
