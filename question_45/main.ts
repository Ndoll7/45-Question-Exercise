//define a funtion to create a car object with optional options...
function create_car(manufacturer, model, ...options){
    //initializa a car object with manufacturer and model
    let car = {
        manufacturer: manufacturer,
        model: model
    };

    //add additional options to the car object
    options.forEach(option => {
        let [key, value] = option.split(":");
        car [key.trim()] = value.trim();
        
    });

    return car;
}

//called the function to create car option
let my_car = create_car("Toyota", "Corrolla","colour: black","Sunroof:True"); 

//print the variable to insure all the information is stored correctly in the car object
console.log(my_car);