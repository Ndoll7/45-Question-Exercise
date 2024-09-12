//define function to show magician names
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
//define an array of magicians names
var magician_names = ["Maliha", "Ramisha", "Muskan"];
var great_magicians = make_great(magician_names);
//show_magicians(great_magicians)
show_magicians(great_magicians);
