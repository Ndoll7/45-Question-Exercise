// define a function to print each magician name from an array
function show_magician(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
// define an array containing magicians name
var magician_names = ["Harry Poter", "hamza", "Usman"];
//call the function to each magician name
show_magician(magician_names);
