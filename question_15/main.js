//question_15
var guestList = ["alishba", "kashish", "ramisha", "huma anti", "sumera anti", "sumama"];
var dontCome = guestList[5];
console.log(dontCome, "nahi aa rahi");
guestList.splice(5, 6, "nahid anti");
guestList.forEach(function (guest) { return console.log("Assalam o alaikum ".concat(guest, ", would you like to dinner with me?")); });
