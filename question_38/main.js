// creating a function
function describe_city(city, country) {
    if (country === void 0) { country = "pakistan"; }
    console.log("".concat(city, " is in ").concat(country));
}
//calling a function
describe_city("Krachi");
describe_city("Lahore");
describe_city("Berlin", "Germany");
