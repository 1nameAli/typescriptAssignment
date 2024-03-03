var carInfo = function (manufacture, model) {
    var option = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        option[_i - 2] = arguments[_i];
    }
    var car = {
        manufacture: manufacture,
        model: model
    };
    for (var i = 0; i < option.length; i += 2) {
        var key = option[i];
        var value = option[i + 1];
        car[key] = value;
    }
    console.log(car);
    return car;
};
carInfo("toyota", "corolla", "color", "blue", "year", "2023");
