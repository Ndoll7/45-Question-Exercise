let guestList = ["huria", "alishba", "ifra", "ramisha"];

let dontCome =guestList[0];

console.log(dontCome, "nahi aa sakti");

// add or remove value from guest list array
guestList.splice(0, 1, "kashish");

console.log("Good News ! we have found a bigger table for Dinner!");

//adding a new guest at starting index of array
guestList.unshift("fozia");

// adding a new guest at ending index of array
guestList.push("sumera anti");

// making a variable for storing a middle index of our guest list array
let middleIndex: number = Math.floor(guestList.length / 2);

// adding a new guest at middle index of array
guestList.splice(middleIndex, 0, "huma anti");

console.log("Update List of our Guests");

//sending a invitation message to our guests one by one with their names
guestList.forEach(oneGuest => console.log(`Salam ! ${oneGuest} Would You Like To Dinner With Me?`));
