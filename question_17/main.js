var guestList = ["huria", "alishba", "ifra", "ramisha"];
var dontCome = guestList[0];
console.log(dontCome, "nahi aa sakti");
// add or remove value from guest list array
guestList.splice(0, 1, "kashish");
console.log("Good News ! we have found a bigger table for Dinner!");
//adding a new guest at starting index of array
guestList.unshift("fozia");
// adding a new guest at ending index of array
guestList.push("sumera anti");
// making a variable for storing a middle index of our guest list array
var middleIndex = Math.floor(guestList.length / 2);
// adding a new guest at middle index of array
guestList.splice(middleIndex, 0, "huma anti");
console.log("Update List of our Guests");
//sending a invitation message to our guests one by one with their names
guestList.forEach(function (oneGuest) { return console.log("Salam ! ".concat(oneGuest, " Would You Like To Dinner With Me?")); });
console.log("Unfortunately, the new dinner table wont arrive on time, so I can invite only two Guests to Dinner with me");
//using while loop to remove guests from the array until only two names remain
while (guestList.length > 2) {
    var removedGuest = guestList.pop();
    console.log("Sorry, ".concat(removedGuest, " I cant invite you to dinner"));
}
console.log("Invitation to the last two guests");
guestList.forEach(function (lastTwo) { return console.log("Luckly ".concat(lastTwo, ", you are still invited to dinner")); });
//removing last two guest from the list
guestList.pop();
guestList.pop();
console.log("Empty List", guestList);
