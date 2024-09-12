//define a funtion to create a car object with optional options...
function create_car(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    //initializa a car object with manufacturer and model
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    //add additional options to the car object
    options.forEach(function (option) {
        var _a = option.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
//called the function to create car option
var my_car = create_car("Toyota", "Corrolla", "colour: black", "Sunroof:True");
//print the variable to insure all the information is stored correctly in the car object
console.log(my_car);
