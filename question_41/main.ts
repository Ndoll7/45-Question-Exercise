// define a function to print each magician name from an array

function show_magician(magicians: string[]){
    magicians.forEach(name => console.log(name));
}

// define an array containing magicians name
let magician_names = ["Harry Poter", "hamza", "Usman"]

//call the function to each magician name
show_magician(magician_names);