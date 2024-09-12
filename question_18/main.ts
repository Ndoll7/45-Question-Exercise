// making a array of countries and print is original order
let countriesToVist: string[] = ["china", "danmark", "brazil", "america"];

console.log("Original Order: ", countriesToVist);

//print the array in alphabetical order without modifying the actual array list
console.log("Alphabetical Ordr:", [...countriesToVist].sort());

//show that the array is still in its original order
console.log("Still in Original Order:", countriesToVist);

//print the array in reversed order without modifying the actual array list (copy)
console.log("Reverse Order:", [...countriesToVist].reverse());

//show that the array is still in its original order
console.log("Still in Original Order:", countriesToVist);

//we have changed the original array order now
console.log("Original Array Reversed:", countriesToVist.reverse());

//print the array to show that its back to its original order
console.log("Back to original Order:", countriesToVist.reverse());

//print the array to show that its has been changed in alphabetical order now
console.log("Sorted in Alphabetical Order:", countriesToVist.sort());

//we have changed in again the original array order now in reverse order again
console.log("Original Array Reversed:", countriesToVist.reverse());