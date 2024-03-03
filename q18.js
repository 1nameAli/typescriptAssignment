var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Question 18 part 1
var Visitplace = ["Madina", "Dubai", "Turkey", "Skurdu", "Bali"];
// question 18 part 2
console.log(Visitplace);
// question 18 part 3
// In Alphabatic Order
console.log(__spreadArray([], Visitplace, true).sort());
// question 18 part 4
console.log(Visitplace);
// queston 18 part 5
//  In reverse Order
console.log(__spreadArray([], Visitplace, true).sort().reverse());
// queston 18 part 6
console.log(Visitplace);
// question 18 part 7
Visitplace.reverse();
console.log(Visitplace);
// question 18 part 8
Visitplace.reverse();
console.log(Visitplace);
// question 18 part 9
var AlphabaticalOrder = Visitplace.sort();
console.log(AlphabaticalOrder);
// question 18 part 10
var reverseAlphabaticalOrder = AlphabaticalOrder.reverse();
console.log(reverseAlphabaticalOrder);
