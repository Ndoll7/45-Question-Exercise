//question_15

let guestList = ["alishba", "kashish", "ramisha", "huma anti", "sumera anti", "sumama"];

let dontCome = guestList[5];

console.log(dontCome, "nahi aa rahi");

guestList.splice(5, 6, "nahid anti");

guestList.forEach(guest => console.log(`Assalam o alaikum ${guest}, would you like to dinner with me?`));
