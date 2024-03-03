var describe_cities = function (city, country) {
    if (country === void 0) { country = "Pakistan"; }
    return console.log("".concat(city, " is in ").concat(country));
};
// First time calling
describe_cities("Karachi");
//Second time calling
describe_cities("Punjab");
// third time calling
describe_cities("Los Angeles", "USA");
