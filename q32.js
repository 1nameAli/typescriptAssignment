function checkingUserName(currentUsers, newUsers) {
    // Lowring the current user
    var lowercurrentUsers = currentUsers.map(function (user) { return user.toLowerCase(); });
    //    lowering the new user and checking the availibilty
    for (var _i = 0, newUsers_1 = newUsers; _i < newUsers_1.length; _i++) {
        var user = newUsers_1[_i];
        if (lowercurrentUsers.includes(user.toLowerCase())) {
            console.log("This username ".concat(user, " is not available Plz try another one "));
        }
        else {
            console.log("This username ".concat(user, " is valid and you can use it "));
        }
    }
}
var currentUsers = ["Maha", "RaNia", "JaWeria", "Mariyam", "Wajiha"];
var newUsers = ["Rania", "Jaweria", "Umer", "Kanzul", "Suleman"];
checkingUserName(currentUsers, newUsers);
