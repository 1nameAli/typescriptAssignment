"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.guest = void 0;
var guest = ["A.Hadi", "Umer", "Zuhaib"];
exports.guest = guest;
for (var i = 0; i < guest.length; i++) {
    var msg = "Hey!," + guest[i] + " I am inviting you to dinner.";
    console.log(msg);
}
console.log("Hey Bro Ali I can't make it to dinner :", guest[1]);
