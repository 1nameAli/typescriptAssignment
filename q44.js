var sandwhichItems = function () {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Lets make sandwhich with the provided items ");
    for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
        var item = items_1[_a];
        console.log("-", item);
    }
    console.log("Your sandwhich is ready\n");
};
sandwhichItems("jam", "bread", "sauce", "sugar");
sandwhichItems("nutela", "bread", "melted choclate", "sugar");
sandwhichItems("egg", "bread", "black peper", "salt");
