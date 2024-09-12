//creating a function with parameters which return a valuse in string
function city_country(city, country) {
    return "".concat(city, ", ").concat(country);
}
//calling a function and print the returned values
console.log(city_country("karachi", "Pakistan"));
console.log(city_country("Tokyo", "Japan"));
console.log(city_country("Berlin", "Germany"));
