var userName1 = ["eric", "john", "natasha", "admin", "a.basit"];
function greeting(userName) {
    if (userName === "admin") {
        console.log("Hello admin, would you like to see the status report?");
    }
    else {
        console.log("Hello ".concat(userName, ", thanks for logging in again."));
    }
}
if (userName1.length > 0) {
    userName1.forEach(greeting);
}
else {
    console.log("We need more users!");
}
// Resetting the userName1 array
userName1 = [];
if (userName1.length > 0) {
    userName1.forEach(greeting);
}
else {
    console.log("We need to find more users!");
}
